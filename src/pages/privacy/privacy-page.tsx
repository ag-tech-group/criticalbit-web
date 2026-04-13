export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-pixel mb-8 text-3xl tracking-wide">Privacy Policy</h1>
      {/*
       * Keep the ISO date below in sync with CURRENT_POLICY_VERSION in
       * criticalbit-auth-api app/consent/constants.py — bumping it is what
       * triggers consent re-prompting for existing users.
       */}
      <p className="text-muted-foreground mb-6 text-sm">
        Last updated: April 12, 2026 (version 2026-04-12)
      </p>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold">
            Who operates this service
          </h2>
          <p>
            criticalbit.gg and its tools are operated by{" "}
            <strong>AG Technology Group LLC</strong>, the data controller for
            the purposes of this policy. For privacy-related inquiries, contact{" "}
            <a
              href="mailto:privacy@criticalbit.gg"
              className="text-primary underline"
            >
              privacy@criticalbit.gg
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">What we collect</h2>
          <p>
            When you visit and use the site, we collect product analytics events
            about page views and feature interactions, along with your IP
            address and browser user-agent string. This helps us understand
            usage patterns and prioritize improvements. By default — for
            visitors who have not explicitly opted in to analytics — these
            events are not associated with any persistent user identifier and
            each site visit is treated as a new anonymous session. If you opt in
            to analytics via the Privacy and data section of your profile, your
            events are linked under a stable identifier that persists across
            sessions and across our tools (for example, your activity on this
            site and on vagrant-story.criticalbit.gg would be tied together).
          </p>
          <p>
            When you create an account, we collect your email address. If you
            sign in with Google or Steam, we receive your profile information
            (name, avatar) from those services.
          </p>
          <p>
            If an error occurs while you are using the site, we collect a
            diagnostic report containing a JavaScript stack trace, the URL where
            the error happened, your browser version, and your IP address. This
            helps us identify and fix bugs.
          </p>
          <p>
            We do not sell or share your personal data with third parties for
            advertising or marketing purposes.
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
            tokens). These are strictly functional and cannot be disabled if you
            want to stay signed in. We do not use advertising cookies.
          </p>
          <p>
            Our analytics provider (PostHog) runs in cookie-free memory mode by
            default — no persistent identifier is stored and no cross-session
            tracking happens. If you explicitly opt in to analytics via the
            Privacy and data section of your profile, PostHog switches to a
            cookie-backed mode and sets a cross-tool cookie on{" "}
            <code>.criticalbit.gg</code> so your activity can be linked across
            our tools under a single stable identifier. You can revoke that
            consent at any time from the same profile page; the cookie is
            cleared on your next page reload.
          </p>
          <p>
            Cloudflare may set a performance cookie as part of its CDN service.
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
              <strong>PostHog</strong> — for product analytics across
              criticalbit tools. PostHog receives page views, interaction
              events, your IP address, and browser user-agent string. By default
              PostHog runs in cookie-free mode without a persistent user
              identifier. If you opt in to analytics via the Privacy and data
              section of your profile, your events are linked under a stable
              identifier that persists across sessions and criticalbit
              subdomains. Subject to{" "}
              <a
                href="https://posthog.com/privacy"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostHog's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Sentry</strong> — for error tracking and performance
              monitoring. Sentry receives JavaScript stack traces, the URL where
              errors occur, your IP address, and browser headers. When an error
              happens, Sentry also captures a short session replay (a recording
              of the preceding interactions, with text and media masked) to aid
              debugging. If you opt in to session recording via the Privacy and
              data section of your profile, a sample of your normal sessions is
              also recorded for general debuggability — again with text and
              media masked. Subject to{" "}
              <a
                href="https://sentry.io/privacy/"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sentry's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Netlify</strong> — for frontend hosting and CDN. Netlify
              automatically records access logs (IP, timestamp, URL) for each
              request. Subject to{" "}
              <a
                href="https://www.netlify.com/privacy/"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google Cloud Platform</strong> — for backend hosting,
              databases, and logging. Processes API request data and
              authenticated user data. Subject to{" "}
              <a
                href="https://cloud.google.com/terms/cloud-privacy-notice"
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Cloud's Privacy Notice
              </a>
              .
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
          <h2 className="mb-2 text-lg font-semibold">Your rights</h2>
          <p>
            Under GDPR, CCPA, and similar regulations, you have the right to
            access the data we hold about you, correct inaccurate data, delete
            your account and associated data, export your data in a portable
            format, object to specific types of processing, and withdraw consent
            for optional processing at any time.
          </p>
          <p>
            To exercise any of these rights, email{" "}
            <a
              href="mailto:privacy@criticalbit.gg"
              className="text-primary underline"
            >
              privacy@criticalbit.gg
            </a>
            . We aim to respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">
            International data transfers
          </h2>
          <p>
            If you are located in the European Economic Area, the United
            Kingdom, or Switzerland, your data will be transferred to and stored
            in the United States by our hosting and analytics providers (Sentry,
            PostHog, Netlify, Google Cloud Platform, Resend). These transfers
            are protected by the EU-US Data Privacy Framework, and our providers
            are signatories to it.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Children's privacy</h2>
          <p>
            This service is not directed at children under 13 years of age (or
            the equivalent minimum age in your jurisdiction). We do not
            knowingly collect personal data from children under 13. If you
            believe a child has provided information to us, email{" "}
            <a
              href="mailto:privacy@criticalbit.gg"
              className="text-primary underline"
            >
              privacy@criticalbit.gg
            </a>{" "}
            and we will delete the account and any associated data.
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
