import { useReveal } from "@/hooks/use-reveal";

const PILLARS = [
    {
        letter: "A",
        title: "Awareness",
        body: "MITCH puts you in front of the right people, at the right time, with a reason to pay attention. Precision outreach built on clear targeting — not volume for its own sake.",
    },
    {
        letter: "C",
        title: "Comprehension",
        body: "It does not just make contact. It creates understanding. MITCH explains what you do, why it matters, and how it fits the prospect's specific situation — accurately, every time.",
    },
    {
        letter: "C",
        title: "Conviction",
        body: "By the time MITCH has done its work, the prospect is not hearing about you for the first time. They already understand the value. Your team picks up a warm conversation, not a cold one.",
    },
    {
        letter: "A",
        title: "Action",
        body: "Conviction without a clear next step is a missed opportunity. MITCH guides interested prospects toward the handoff — qualified, warm, and ready for your team to close.",
    },
];

export function WhatSection() {
    const r1 = useReveal();
    const r2 = useReveal();
    const rQuote = useReveal();
    const rCta = useReveal();

    return (
        <section id="what" className="py-24 md:py-36">
            <div className="container-mitch">
                <div ref={r1.ref} className={r1.className}>
                    <p className="eyebrow">01 — What MITCH does</p>
                    <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.75rem)] max-w-4xl">
                        Advanced marketing that uses extraordinary technology.
                    </h2>
                </div>

                <div
                    ref={r2.ref}
                    className={`mt-12 grid gap-10 md:grid-cols-2 text-[color:var(--offblack)]/85 ${r2.className}`}
                >
                    <p className="text-lg leading-relaxed">
                        Every sale follows the same path: Awareness, Comprehension, Conviction, Action. No sale
                        has ever skipped a step. The question is not whether your prospects need to travel that
                        path — they do — it is whether you are the one walking them along it.
                    </p>
                    <p className="text-lg leading-relaxed">
                        MITCH handles the first half. It creates genuine Awareness of who you are and what you
                        offer, and builds Comprehension of why it matters to the specific person it is speaking
                        with. That is not a warm-up act. That is the work that makes everything else possible.
                    </p>
                </div>

                {/* Standalone proof point */}
                <div
                    ref={rQuote.ref}
                    className={`my-20 md:my-28 text-center ${rQuote.className}`}
                >
                    <p className="font-display italic text-[clamp(2rem,5vw,4rem)] leading-tight tracking-tight">
                        Without <span className="text-[color:var(--burnt)]">AC</span>, there is no{" "}
                        <span className="text-[color:var(--burnt)]">CA</span>.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 text-[color:var(--offblack)]/85 max-w-5xl">
                    <p className="text-lg leading-relaxed">
                        MITCH is not a tool you operate. It is a service that performs. Built on advanced
                        marketing intelligence and powered by the best conversational technology available, it
                        knows more about your business, your environment, and your competitive context within
                        ten minutes of being briefed than a human hire would learn in three months.
                    </p>
                    <p className="text-lg leading-relaxed">
                        And unlike a human hire, it does not guess, improvise, or forget.
                    </p>
                </div>

                {/* ACCA pillars */}
                <div className="mt-20 grid gap-px bg-[color:var(--border)] md:grid-cols-4 border border-[color:var(--border)]">
                    {PILLARS.map((p, i) => {
                        const rev = useReveal();
                        return (
                            <article
                                key={i}
                                ref={rev.ref}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                className={`bg-[color:var(--warmwhite)] p-7 md:p-9 flex flex-col gap-4 ${rev.className}`}
                            >
                                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl md:text-6xl text-[color:var(--burnt)] leading-none">
                    {p.letter}
                  </span>
                                    <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
                    {p.title}
                  </span>
                                </div>
                                <h3 className="font-display text-2xl">{p.title}</h3>
                                <p className="text-sm text-[color:var(--offblack)]/80 leading-relaxed">{p.body}</p>
                            </article>
                        );
                    })}
                </div>

                {/* Section CTA */}
                <div
                    ref={rCta.ref}
                    className={`mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 ${rCta.className}`}
                >
                    <div className="max-w-2xl">
                        <p className="font-display text-2xl md:text-3xl">
                            Want to know what MITCH would sound like on your calls?
                        </p>
                        <p className="mt-2 text-[color:var(--muted-foreground)]">
                            Tell us what you need. Book a time. Hear it for yourself.
                        </p>
                    </div>
                    <a
                        href="#configure"
                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-[color:var(--offblack)] text-[color:var(--offblack)] hover:bg-[color:var(--offblack)] hover:text-[color:var(--warmwhite)] transition-colors rounded-sm font-medium"
                    >
                        Configure your demo <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
