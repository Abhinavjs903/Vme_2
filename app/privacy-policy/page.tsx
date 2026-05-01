import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | meraipu",
  description: "Privacy policy for the meraipu platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Shield size={28} className="text-indigo-500" />
          <h1 className="font-display text-3xl font-bold tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <p className="text-sm text-zinc-500 mb-10">Last updated: April 2025</p>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              1. What we collect
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              meraipu is a fully static, frontend-only website. We do not
              collect, store, or process any personal data. There is no login,
              no account creation, and no form submission that sends data to any
              server owned by us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              2. Cookies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We use only a single local-storage key to remember your preferred
              color theme (light or dark). No tracking cookies, no analytics
              cookies, no third-party advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              3. Third-party links
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The site contains links to Google Drive files, YouTube videos, and
              other external resources shared by contributors. We are not
              responsible for the privacy practices of those external platforms.
              Please review their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              4. Hosting & analytics
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              meraipu is hosted on Vercel. Vercel may collect standard server
              logs (IP address, browser user-agent, referrer) as part of its
              infrastructure. Refer to{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 underline underline-offset-2 hover:text-indigo-600"
              >
                Vercel's Privacy Policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              5. Changes to this policy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We may update this policy occasionally. Any changes will be
              reflected on this page with a revised date. Since no personal data
              is collected, changes will generally be minor and informational.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-2">
              6. Contact
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Questions? Reach us at{" "}
              <a
                href="mailto:sehajmakkar2004@gmail.com"
                className="text-indigo-500 underline underline-offset-2 hover:text-indigo-600"
              >
                sehajmakkar2004@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}