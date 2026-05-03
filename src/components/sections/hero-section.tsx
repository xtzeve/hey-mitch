import { useReveal } from "@/hooks/use-reveal";

export function HeroSection() {
    const r1 = useReveal();
    const r2 = useReveal();
    const r3 = useReveal();

    return (
        <section id="hero" className="relative overflow-hidden">
            {/* subtle background accent */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, var(--burnt) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--offblack) 0, transparent 45%)",
                }}
            />
            <div className="container-mitch pt-16 pb-24 md:pt-28 md:pb-36">
                <p ref={r1.ref} className={`eyebrow ${r1.className}`}>
                    Precision outbound · Awareness & Comprehension at scale
                </p>

                <h1
                    ref={r2.ref}
                    className={`mt-6 text-[clamp(2.5rem,7vw,5.75rem)] leading-[1.02] tracking-tight max-w-5xl ${r2.className}`}
                >
                    MITCH opens the conversation.
                    <span className="block text-[color:var(--burnt)] italic font-display">
            Your team closes it.
          </span>
                </h1>

                <div
                    ref={r3.ref}
                    className={`mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] items-end ${r3.className}`}
                >
                    <p className="text-lg md:text-xl leading-relaxed text-[color:var(--offblack)]/85 max-w-2xl">
                        Top-of-funnel outreach is where most sales processes break down — not because the
                        product is wrong, but because the groundwork was never laid.{" "}
                        <span className="text-[color:var(--offblack)]">
              MITCH is a precision outbound service that creates Awareness and Comprehension at
              scale, so that by the time your team engages, Conviction and Action are already
              within reach.
            </span>
                    </p>

                    <div className="md:text-right">
                        <p className="text-sm text-[color:var(--muted-foreground)] max-w-xs md:ml-auto">
                            Hear what MITCH sounds like for your business. Configure your demo in under two
                            minutes. Book a call. We'll do the rest.
                        </p>
                        <a
                            href="#configure"
                            className="mt-5 inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--offblack)] text-[color:var(--warmwhite)] hover:bg-[color:var(--burnt)] transition-colors rounded-sm text-base font-medium"
                        >
                            Hear MITCH <span aria-hidden>→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rule" />
        </section>
    );
}
