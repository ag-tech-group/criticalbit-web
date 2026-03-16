export function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-pixel mb-8 text-3xl tracking-wide">
        Terms of Service
      </h1>
      <p className="text-muted-foreground mb-6 text-sm">
        Last updated: March 16, 2026
      </p>

      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold">Acceptance</h2>
          <p>
            By using criticalbit.gg and its associated tools, you agree to these
            terms. If you do not agree, do not use the service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">The service</h2>
          <p>
            CriticalBit provides community gaming tools hosted at criticalbit.gg
            and its subdomains. The service is provided "as is" without warranty
            of any kind. We reserve the right to modify or discontinue any part
            of the service at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Accounts</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              You are responsible for maintaining the security of your account.
            </li>
            <li>
              You must provide accurate information when creating an account.
            </li>
            <li>
              One account per person. Do not create multiple accounts or share
              your account.
            </li>
            <li>
              We may suspend or terminate accounts that violate these terms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">User content</h2>
          <p>
            You retain ownership of any content you upload (save files, builds,
            etc.). By uploading content, you grant CriticalBit a license to
            store, process, and display it as necessary to provide the service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Acceptable use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Use the service for any unlawful purpose.</li>
            <li>
              Attempt to gain unauthorized access to any part of the service.
            </li>
            <li>
              Interfere with or disrupt the service or its infrastructure.
            </li>
            <li>
              Scrape, crawl, or harvest data from the service without
              permission.
            </li>
            <li>Impersonate another person or entity.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Intellectual property</h2>
          <p>
            Game data, names, and assets referenced by CriticalBit tools belong
            to their respective owners. CriticalBit is a community fan project
            and is not affiliated with or endorsed by any game publisher.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">
            Limitation of liability
          </h2>
          <p>
            CriticalBit and its contributors are not liable for any damages
            arising from your use of the service, including but not limited to
            data loss, service interruptions, or inaccurate game data.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the
            service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:hello@criticalbit.gg"
              className="text-primary underline"
            >
              hello@criticalbit.gg
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
