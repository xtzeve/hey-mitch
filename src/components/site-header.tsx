import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/mitch-wordmark.png";

const NAV = [
    { href: "#what", label: "What" },
    { href: "#why", label: "Why" },
    { href: "#how", label: "How" },
    { href: "#mitch", label: "MITCH" },
    { href: "#go", label: "Go!" },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--warmwhite)]/85 border-b border-[color:var(--border)]">
            <div className="container-mitch flex items-center justify-between h-16 md:h-20">
                <Link to="/" className="flex items-center" aria-label="MITCH home">
                    <img src={wordmark} alt="MITCH" className="h-8 md:h-10 w-auto" />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            className="text-sm tracking-wide text-[color:var(--offblack)] hover:text-[color:var(--burnt)] transition-colors"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#mitch"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[color:var(--offblack)] text-[color:var(--warmwhite)] hover:bg-[color:var(--burnt)] transition-colors rounded-sm"
                >
                    Hear MITCH <span aria-hidden>→</span>
                </a>
            </div>
        </header>
    );
}
