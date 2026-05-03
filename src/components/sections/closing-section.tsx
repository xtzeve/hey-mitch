import { useReveal } from "@/hooks/use-reveal";

export function ClosingSection() {
    const r1 = useReveal();
    return (
        <section id="go" className="py-24 md:py-36">
            <div className="container-mitch">
                <div ref={r1.ref} className={`max-w-4xl ${r1.className}`}>
                    <p className="eyebrow">05 — Get started</p>
                    <h2 className="mt-5 text-[clamp(2.25rem,5.5vw,4.5rem)]">
                        Your team is built to close.{" "}
                        <span className="italic font-display text-[color:var(--burnt)]">
              Let MITCH build the ground they close on.
            </span>
                    </h2>
                    <p className="mt-8 text-lg md:text-xl text-[color:var(--offblack)]/80 max-w-2xl leading-relaxed">
                        Start with a conversation. We will tell you quickly whether MITCH is right for your
                        situation — and what it would look like if it is.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a
                            href="#configure"
                            className="inline-flex items-center gap-2 px-7 py-4 bg-[color:var(--offblack)] text-[color:var(--warmwhite)] hover:bg-[color:var(--burnt)] transition-colors rounded-sm font-medium text-base"
                        >
                            Book a call <span aria-hidden>→</span>
                        </a>
                        <p className="text-sm text-[color:var(--muted-foreground)]">
                            No pitch. No pressure. Just clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
