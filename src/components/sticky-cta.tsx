import { useEffect, useState } from "react";

/**
 * Persistent floating CTA so a call-to-action is visible at all times.
 * Hidden over the hero (which has its own large CTA) and over the
 * questionnaire/calendar section (#mitch) where the inline CTA is the form itself.
 */
export function StickyCta() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const targets = ["hero", "mitch"];
        const els = targets
            .map((id) => document.getElementById(id))
            .filter((e): e is HTMLElement => !!e);

        if (els.length === 0) {
            setShow(true);
            return;
        }

        let overTarget = new Set<string>();
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    const id = (e.target as HTMLElement).id;
                    if (e.isIntersecting) overTarget.add(id);
                    else overTarget.delete(id);
                });
                setShow(overTarget.size === 0);
            },
            { threshold: 0.25 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <div
            aria-hidden={!show}
            className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
                show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <a
                href="#configure"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[color:var(--burnt)] text-[color:var(--warmwhite)] shadow-lg shadow-black/10 hover:bg-[color:var(--offblack)] transition-colors text-sm font-medium"
            >
                Hear MITCH <span aria-hidden>→</span>
            </a>
        </div>
    );
}
