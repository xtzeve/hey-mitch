import { useReveal } from "@/hooks/use-reveal";

const REASONS = [
    {
        title: "Instant scale",
        body: "MITCH handles as many simultaneous conversations as your pipeline requires. No ramp-up period, no capacity ceiling, no drop in quality at volume.",
    },
    {
        title: "No onboarding",
        body: "No hire to make, no training programme to run, no knowledge transfer to manage. MITCH knows your business and operations inside out within minutes.",
    },
    {
        title: "No downtime",
        body: "No sick days. No holidays. No off days. No call reluctance. MITCH is consistent every time, without exception.",
    },
    {
        title: "Outreach that respects the recipient",
        body: "MITCH reaches out when there is a genuine reason to, engages only when there is interest, and stops when there is not. Your pipeline stays healthy. Your brand stays intact.",
    },
];

export function WhySection() {
    const r1 = useReveal();
    const rCta = useReveal();

    return (
        <section
            id="why"
            className="py-24 md:py-36 bg-[color:var(--offblack)] text-[color:var(--warmwhite)]"
        >
            <div className="container-mitch">
                <div ref={r1.ref} className={r1.className}>
                    <p className="eyebrow" style={{ color: "var(--burnt)" }}>
                        02 — Why you need it
                    </p>
                    <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.75rem)] max-w-4xl text-[color:var(--warmwhite)]">
                        Scale without overhead.{" "}
                        <span className="italic font-display text-[color:var(--burnt)]">
              Outreach without variables.
            </span>
                    </h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-5xl text-[color:var(--warmwhite)]/80">
                        <p className="text-lg leading-relaxed">
                            The top of your funnel is the most important and most neglected part of your sales
                            process. Without consistent, high-quality Awareness and Comprehension work, your
                            pipeline does not fill — it trickles.
                        </p>
                        <p className="text-lg leading-relaxed">
                            And the conventional answer to that problem — hiring SDRs — is slow, expensive, and
                            inconsistent. MITCH removes those variables entirely. The same quality of outreach,
                            at any volume, with none of the overhead.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-px bg-[color:var(--warmwhite)]/10 md:grid-cols-4 border border-[color:var(--warmwhite)]/10">
                    {REASONS.map((r, i) => {
                        const rev = useReveal();
                        return (
                            <article
                                key={i}
                                ref={rev.ref}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                className={`bg-[color:var(--offblack)] p-7 md:p-9 flex flex-col gap-4 ${rev.className}`}
                            >
                <span className="font-display text-3xl md:text-4xl text-[color:var(--burnt)]">
                  0{i + 1}
                </span>
                                <h3 className="font-display text-xl md:text-2xl text-[color:var(--warmwhite)]">
                                    {r.title}
                                </h3>
                                <p className="text-sm text-[color:var(--warmwhite)]/70 leading-relaxed">{r.body}</p>
                            </article>
                        );
                    })}
                </div>

                <div
                    ref={rCta.ref}
                    className={`mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 ${rCta.className}`}
                >
                    <div className="max-w-2xl">
                        <p className="font-display text-2xl md:text-3xl text-[color:var(--warmwhite)]">
                            See what MITCH looks like at your scale.
                        </p>
                        <p className="mt-2 text-[color:var(--warmwhite)]/70">
                            Book a call and we will walk you through what a deployment would look like for your
                            business.
                        </p>
                    </div>
                    <a
                        href="#configure"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--burnt)] text-[color:var(--warmwhite)] hover:bg-[color:var(--warmwhite)] hover:text-[color:var(--offblack)] transition-colors rounded-sm font-medium"
                    >
                        Book a call <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
