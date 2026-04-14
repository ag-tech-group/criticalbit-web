import { api } from "@/api/api"

// Consent state is authoritative in criticalbit-auth-api's DB. criticalbit-web
// is a pure reader — users change their consents via the profile page in
// criticalbit-auth-web (different origin, not shared localStorage), so on each
// auth load we refresh from the server and mirror the result into our own
// origin's localStorage. Boot-time code (PostHog and Sentry init, which run
// synchronously before React mounts) reads the cache without waiting for the
// network. The one-page-load lag when a user changes consent is intentional
// and matches the "changes take effect on next reload" UX copy.

export const CONSENT_TYPES = ["analytics", "session_replay"] as const
export type ConsentType = (typeof CONSENT_TYPES)[number]

export interface ConsentEntry {
  consented: boolean
  version: string
  consented_at: string
  is_stale: boolean
}

export interface ConsentsResponse {
  current_policy_version: string
  consents: Partial<Record<ConsentType, ConsentEntry>>
}

const CACHE_KEYS: Record<ConsentType, string> = {
  analytics: "cb_consent_analytics",
  session_replay: "cb_consent_session_replay",
}

export async function fetchConsents(): Promise<ConsentsResponse> {
  return api.get("user/consents").json<ConsentsResponse>()
}

export function readCachedConsent(type: ConsentType): boolean {
  try {
    return window.localStorage.getItem(CACHE_KEYS[type]) === "1"
  } catch {
    return false
  }
}

export function writeCachedConsents(response: ConsentsResponse): void {
  try {
    for (const type of CONSENT_TYPES) {
      const consented = response.consents[type]?.consented ?? false
      window.localStorage.setItem(CACHE_KEYS[type], consented ? "1" : "0")
    }
  } catch {
    // localStorage unavailable (private browsing in some browsers) — skip.
  }
}

export function clearCachedConsents(): void {
  try {
    for (const type of CONSENT_TYPES) {
      window.localStorage.removeItem(CACHE_KEYS[type])
    }
  } catch {
    // ignore
  }
}
