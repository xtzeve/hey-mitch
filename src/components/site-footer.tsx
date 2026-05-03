import { Link } from "@tanstack/react-router";

export function SiteFooter() {
    return (
        <footer className="border-t border-[color:var(--border)] mt-20 md:mt-32">
            <div className="container-mitch py-12 md:py-16 grid gap-10 md:grid-cols-4">
                <div className="md:col-span-2">
                    <p className="font-display text-2xl tracking-tight">MITCH</p>
                    <p className="mt-3 text-sm text-[color:var(--muted-foreground)] max-w-md">
                        A precision outbound service that creates Awareness and Comprehension at scale —
                        so your team picks up warm conversations, not cold ones.
                    </p>
                </div>
                <div className="text-sm space-y-2">
                    <p className="eyebrow mb-3">Company</p>
                    <p className="text-[color:var(--muted-foreground)]">Pearson Consulting</p>
                    <a
                        href="mailto:vp@pearson-consulting.de"
                        className="block text-[color:var(--muted-foreground)] hover:text-[color:var(--burnt)] transition-colors"
                    >
                        vp@pearson-consulting.de
                    </a>
                </div>
                <div className="text-sm space-y-2">
                    <p className="eyebrow mb-3">Legal</p>
                    <Link
                        to="/legal-notice"
                        className="block text-[color:var(--muted-foreground)] hover:text-[color:var(--burnt)] transition-colors"
                    >
                        Legal Notice
                    </Link>
                    <Link
                        to="/privacy-policy"
                        className="block text-[color:var(--muted-foreground)] hover:text-[color:var(--burnt)] transition-colors"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div className="border-t border-[color:var(--border)]">
                <div className="container-mitch py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-[color:var(--muted-foreground)]">
                    <p>MITCH is a service by Pearson Consulting.</p>
                    <p>© {new Date().getFullYear()} — All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
