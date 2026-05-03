import { useReveal } from "@/hooks/use-reveal";

const STEPS = [
    {
        n: "01",
        title: "The Brief",
        body: "We begin with a structured overview of your business: what you sell, who you sell it to, what your environment looks like, and what success at the top of your funnel actually means. This is the foundation everything else is built on — and it is what allows MITCH to walk your prospects through Awareness and Comprehension with accuracy and confidence.",
    },
    {
        n: "02",
        title: "Agent Configuration",
        body: "Based on the brief, we configure one or more MITCH agents — each built for a specific role in your outreach. An introduction agent for first contact. A follow-up agent for re-engagement. Additional agents for specific scenarios, segments, or campaigns. Each agent is situation-specific. None of them are generic.",
    },
    {
        n: "03",
        title: "Internal Testing",
        body: "Before MITCH speaks to a single prospect, you speak to MITCH. You test it. You challenge it on the difficult questions and the edge cases. You verify that it represents your business the way you want it represented. Only when you are satisfied does it go live.",
    },
    {
        n: "04",
        title: "Live Outreach",
        body: "MITCH begins outreach. It creates Awareness, builds Comprehension, handles questions, qualifies interest, and generates warmth. When a prospect is ready for a human conversation — when AC has done its work — MITCH hands off cleanly, with full context, at exactly the right moment.",
    },
];

const FLOW = ["Brief", "Configure", "Test", "Live", "AC Delivered", "Handoff to CA"];

export function HowSection() {
    const r1 = useReveal();
    const rFlow = useReveal();
    const rCta = useReveal();

    return (
        <section id="how" className="py-24 md:py-36">
            <div className="container-mitch">
                <div ref={r1.ref} className={r1.className}>
                    <p className="eyebrow">03 — How it works</p>
                    <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.75rem)] max-w-4xl">
                        Every deployment starts with clarity — a conversation about{" "}
                        <span className="italic font-display text-[color:var(--burnt)]">
              where you are and where you want to be.
            </span>
                    </h2>
                </div>

                <ol className="mt-16 grid gap-px bg-[color:var(--border)] border border-[color:var(--border)]">
                    {STEPS.map((s, i) => {
                        const rev = useReveal<HTMLLIElement>();
                        return (
                            <li
                                key={s.n}
                                ref={rev.ref}
                                style={{ transitionDelay: `${i * 60}ms` }}
                                className={`bg-[color:var(--warmwhite)] p-8 md:p-12 grid gap-6 md:grid-cols-[180px_1fr] items-start ${rev.className}`}
                            >
                                <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
                  <span className="font-display text-5xl md:text-6xl text-[color:var(--burnt)] leading-none">
                    {s.n}
                  </span>
                                    <span className="eyebrow">Step {i + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                                    <p className="mt-3 text-[color:var(--offblack)]/80 leading-relaxed max-w-3xl">
                                        {s.body}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {/* Flow diagram */}
                <div
                    ref={rFlow.ref}
                    className={`mt-16 overflow-x-auto ${rFlow.className}`}
                >
                    <div className="flex items-center gap-3 min-w-max py-4">
                        {FLOW.map((step, i) => (
                            <div key={step} className="flex items-center gap-3">
                                <div
                                    className={`px-4 py-2 rounded-sm text-sm whitespace-nowrap border ${
                                        i >= 4
                                            ? "bg-[color:var(--burnt)] text-[color:var(--warmwhite)] border-[color:var(--burnt)]"
                                            : "border-[color:var(--offblack)]/30 text-[color:var(--offblack)]"
                                    }`}
                                >
                                    {step}
                                </div>
                                {i < FLOW.length - 1 && (
                                    <span aria-hidden className="text-[color:var(--muted-foreground)]">
                    ──→
                  </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    ref={rCta.ref}
                    className={`mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 ${rCta.className}`}
                >
                    <div className="max-w-2xl">
                        <p className="font-display text-2xl md:text-3xl">Ready to see the process in action?</p>
                        <p className="mt-2 text-[color:var(--muted-foreground)]">
                            Start with a call. We will show you exactly how MITCH would be configured for your
                            business.
                        </p>
                    </div>
                    <a
                        href="#configure"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--offblack)] text-[color:var(--warmwhite)] hover:bg-[color:var(--burnt)] transition-colors rounded-sm font-medium"
                    >
                        Get Started <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
