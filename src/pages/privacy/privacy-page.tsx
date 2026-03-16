export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-pixel mb-8 text-3xl tracking-wide">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6 text-sm">
        Last updated: March 16, 2026
      </p>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold">What we collect</h2>
          <p>
            When you create an account, we collect your email address. If you
            sign in with Google or Steam, we receive your profile information
            (name, avatar) from those services. We do not sell or share your
            personal data with third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">How we use your data</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Authentication</strong> — to identify you across
              criticalbit.gg tools and games.
            </li>
            <li>
              <strong>Email</strong> — to send password reset links and
              important account notifications. We will never send marketing
              emails.
            </li>
            <li>
              <strong>Game data</strong> — if you upload save files or use tool
              features, that data is stored to provide the service and is tied
              to your account.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Cookies</h2>
          <p>
            We use httpOnly cookies for authentication (JWT access and refresh
            tokens). These are strictly functional — we do not use tracking or
            advertising cookies. Cloudflare may set a performance cookie as part
            of its CDN service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Third-party services</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Google OAuth</strong> — for sign-in. Subject to{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Steam OpenID</strong> — for sign-in. Subject to{" "}
              <a
                href="https://store.steampowered.com/privacy_agreement/"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Steam's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Resend</strong> — for transactional email delivery
              (password resets).
            </li>
            <li>
              <strong>Cloudflare</strong> — for DNS, CDN, and DDoS protection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Data retention</h2>
          <p>
            Your account data is retained as long as your account is active. You
            may request deletion of your account and all associated data by
            contacting us.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a
              href="mailto:privacy@criticalbit.gg"
              className="text-primary underline"
            >
              privacy@criticalbit.gg
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
