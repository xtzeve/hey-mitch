import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
    url: z
        .string()
        .trim()
        .min(3, "Please enter your website")
        .max(500)
        .regex(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i, "Enter a valid URL"),
    voice: z.enum(["Male", "Female"]),
    style: z.enum(["Direct & Formal", "Conversational & Warm", "Confident & Concise"]),
    accent: z.enum(["American English", "British English"]),
    prospect: z.enum([
        "C-Suite / Senior Leadership",
        "Mid-Level Management",
        "Individual Contributors / Specialists",
    ]),
    name: z.string().trim().min(1, "Please enter your name").max(120),
    email: z.string().trim().email("Enter a valid email").max(255),
});

type FormState = {
    url: string;
    voice: "" | "Male" | "Female";
    style: "" | "Direct & Formal" | "Conversational & Warm" | "Confident & Concise";
    accent: "" | "American English" | "British English";
    prospect:
        | ""
        | "C-Suite / Senior Leadership"
        | "Mid-Level Management"
        | "Individual Contributors / Specialists";
    name: string;
    email: string;
};

const INIT: FormState = {
    url: "",
    voice: "",
    style: "",
    accent: "",
    prospect: "",
    name: "",
    email: "",
};

export function HearMitchSection() {
    const r1 = useReveal();
    const rForm = useReveal();
    const rCta = useReveal();

    const [form, setForm] = useState<FormState>(INIT);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

    const isComplete = useMemo(() => schema.safeParse(form).success, [form]);

    const update = <K extends keyof FormState>(key: K, val: FormState[K]) =>
        setForm((f) => ({ ...f, [key]: val }));

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const result = schema.safeParse(form);
        if (!result.success) {
            const errs: Partial<Record<keyof FormState, string>> = {};
            result.error.issues.forEach((iss) => {
                const k = iss.path[0] as keyof FormState;
                if (!errs[k]) errs[k] = iss.message;
            });
            setErrors(errs);
            return;
        }
        setErrors({});
        setSubmitted(true);
        // TODO: wire to backend email delivery once destination address is provided
        document.getElementById("calendar-slot")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="mitch" className="py-24 md:py-36 bg-[color:var(--card)]">
            <div className="container-mitch">
                <div ref={r1.ref} className={r1.className}>
                    <p className="eyebrow">04 — Hear MITCH</p>
                    <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.75rem)] max-w-4xl">
                        Don't take our word for it.{" "}
                        <span className="italic font-display text-[color:var(--burnt)]">Hear it.</span>
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-4xl text-[color:var(--offblack)]/80">
                        <p className="text-lg leading-relaxed">
                            The best way to understand what MITCH does is to experience a conversation. Tell us
                            how you want your agent to sound, book a time, and we will configure a live demo call
                            built around your business — so you hear exactly what your prospects would hear.
                        </p>
                        <p className="text-lg leading-relaxed">
                            This is not a product walkthrough. It is a conversation with MITCH, configured to
                            your specification.
                        </p>
                    </div>
                </div>

                <div ref={rForm.ref} className={`mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] ${rForm.className}`}>
                    {/* Form */}
                    <form
                        id="configure"
                        onSubmit={onSubmit}
                        noValidate
                        className="bg-[color:var(--warmwhite)] border border-[color:var(--border)] p-7 md:p-10 rounded-sm scroll-mt-24"
                    >
                        <div className="flex items-baseline justify-between mb-7">
                            <p className="font-display text-2xl">Configure your demo</p>
                            <span className="text-xs text-[color:var(--muted-foreground)]">All fields required</span>
                        </div>

                        {/* URL */}
                        <Field label="Your company website" htmlFor="url" hint="We use this to brief MITCH on your business before the call." error={errors.url}>
                            <input
                                id="url"
                                type="text"
                                inputMode="url"
                                placeholder="https://yourcompany.com"
                                value={form.url}
                                onChange={(e) => update("url", e.target.value)}
                                className="input-mitch"
                                maxLength={500}
                            />
                        </Field>

                        {/* Voice */}
                        <Field label="Preferred agent voice" error={errors.voice}>
                            <RadioRow
                                name="voice"
                                value={form.voice}
                                onChange={(v) => update("voice", v as FormState["voice"])}
                                options={["Male", "Female"]}
                            />
                        </Field>

                        {/* Style */}
                        <Field label="How should MITCH sound?" error={errors.style}>
                            <RadioStack
                                name="style"
                                value={form.style}
                                onChange={(v) => update("style", v as FormState["style"])}
                                options={[
                                    { value: "Direct & Formal", desc: "authoritative, precise, no small talk" },
                                    { value: "Conversational & Warm", desc: "natural, personable, easy to engage" },
                                    { value: "Confident & Concise", desc: "efficient, clear, respectful of time" },
                                ]}
                            />
                        </Field>

                        {/* Accent */}
                        <Field label="Preferred accent" error={errors.accent}>
                            <RadioRow
                                name="accent"
                                value={form.accent}
                                onChange={(v) => update("accent", v as FormState["accent"])}
                                options={["American English", "British English"]}
                            />
                        </Field>

                        {/* Prospect */}
                        <Field label="Who would MITCH typically be calling for you?" error={errors.prospect}>
                            <RadioStack
                                name="prospect"
                                value={form.prospect}
                                onChange={(v) => update("prospect", v as FormState["prospect"])}
                                options={[
                                    { value: "C-Suite / Senior Leadership" },
                                    { value: "Mid-Level Management" },
                                    { value: "Individual Contributors / Specialists" },
                                ]}
                            />
                        </Field>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <Field label="Your name" htmlFor="name" error={errors.name}>
                                <input
                                    id="name"
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    className="input-mitch"
                                    maxLength={120}
                                />
                            </Field>
                            <Field label="Your email address" htmlFor="email" error={errors.email}>
                                <input
                                    id="email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    className="input-mitch"
                                    maxLength={255}
                                />
                            </Field>
                        </div>

                        <button
                            type="submit"
                            disabled={!isComplete}
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm font-medium transition-colors bg-[color:var(--offblack)] text-[color:var(--warmwhite)] hover:bg-[color:var(--burnt)] disabled:bg-[color:var(--muted)] disabled:text-[color:var(--muted-foreground)] disabled:cursor-not-allowed"
                        >
                            {submitted ? "Open calendar below" : "Unlock calendar"} <span aria-hidden>→</span>
                        </button>
                        <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
                            The calendar opens automatically once all fields are complete.
                        </p>
                    </form>

                    {/* Calendar slot */}
                    <div id="calendar-slot" className="relative">
                        <div
                            className={`h-full min-h-[520px] border border-dashed border-[color:var(--border)] rounded-sm p-8 flex flex-col items-center justify-center text-center transition-opacity ${
                                submitted ? "bg-[color:var(--warmwhite)]" : "bg-[color:var(--muted)]/40"
                            }`}
                        >
                            {!submitted ? (
                                <>
                                    <span className="eyebrow">Calendar locked</span>
                                    <p className="mt-4 font-display text-2xl max-w-sm">
                                        Complete the questionnaire to unlock your booking calendar.
                                    </p>
                                    <p className="mt-3 text-sm text-[color:var(--muted-foreground)] max-w-sm">
                                        Your Google Calendar appointment schedule will appear here. Choose a time and
                                        your demo is confirmed.
                                    </p>
                                </>
                            ) : (
                                <div className="w-full">
                                    <span className="eyebrow">Calendar unlocked</span>
                                    <p className="mt-4 font-display text-2xl max-w-sm mx-auto">
                                        Choose a time that works for you.
                                    </p>
                                    <div className="mt-6 w-full overflow-hidden rounded-sm border border-[color:var(--border)] bg-[color:var(--card)]">
                                        <iframe
                                            src="https://calendly.com/vincentljpearson/30min?hide_gdpr_banner=1&primary_color=c94f0a"
                                            title="Book a MITCH demo"
                                            className="w-full"
                                            style={{ height: "720px", border: 0 }}
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
                                        Trouble loading?{" "}
                                        <a
                                            href="https://calendly.com/vincentljpearson/30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-[color:var(--burnt)]"
                                        >
                                            Open booking page in a new tab
                                        </a>
                                        .
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    ref={rCta.ref}
                    className={`mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 ${rCta.className}`}
                >
                    <div className="max-w-2xl">
                        <p className="font-display text-2xl md:text-3xl">Configure your demo now.</p>
                        <p className="mt-2 text-[color:var(--muted-foreground)]">
                            Two minutes to set up. One call to change how you think about top-of-funnel.
                        </p>
                    </div>
                    <a
                        href="#configure"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--burnt)] text-[color:var(--warmwhite)] hover:bg-[color:var(--offblack)] transition-colors rounded-sm font-medium"
                    >
                        Hear MITCH <span aria-hidden>→</span>
                    </a>
                </div>
            </div>

            <style>{`
        .input-mitch {
          width: 100%;
          background: var(--warmwhite);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.7rem 0.85rem;
          font-size: 0.95rem;
          color: var(--offblack);
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }
        .input-mitch:focus {
          outline: none;
          border-color: var(--burnt);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--burnt) 18%, transparent);
        }
      `}</style>
        </section>
    );
}

function Field({
                   label,
                   htmlFor,
                   hint,
                   error,
                   children,
               }: {
    label: string;
    htmlFor?: string;
    hint?: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-5">
            <label htmlFor={htmlFor} className="block text-sm font-medium text-[color:var(--offblack)] mb-2">
                {label}
            </label>
            {children}
            {hint && !error && (
                <p className="mt-1.5 text-xs text-[color:var(--muted-foreground)]">{hint}</p>
            )}
            {error && <p className="mt-1.5 text-xs text-[color:var(--destructive)]">{error}</p>}
        </div>
    );
}

function RadioRow({
                      name,
                      value,
                      onChange,
                      options,
                  }: {
    name: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
}) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((opt) => {
                const active = value === opt;
                return (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => onChange(opt)}
                        aria-pressed={active}
                        className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                            active
                                ? "bg-[color:var(--offblack)] text-[color:var(--warmwhite)] border-[color:var(--offblack)]"
                                : "border-[color:var(--border)] text-[color:var(--offblack)] hover:border-[color:var(--offblack)]"
                        }`}
                    >
                        <input type="radio" name={name} value={opt} checked={active} onChange={() => onChange(opt)} className="sr-only" />
                        {opt}
                    </button>
                );
            })}
        </div>
    );
}

function RadioStack({
                        name,
                        value,
                        onChange,
                        options,
                    }: {
    name: string;
    value: string;
    onChange: (v: string) => void;
    options: { value: string; desc?: string }[];
}) {
    return (
        <div className="grid gap-2">
            {options.map((opt) => {
                const active = value === opt.value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => onChange(opt.value)}
                        aria-pressed={active}
                        className={`text-left px-4 py-3 border rounded-sm transition-colors ${
                            active
                                ? "bg-[color:var(--offblack)] text-[color:var(--warmwhite)] border-[color:var(--offblack)]"
                                : "border-[color:var(--border)] text-[color:var(--offblack)] hover:border-[color:var(--offblack)]"
                        }`}
                    >
                        <input type="radio" name={name} value={opt.value} checked={active} onChange={() => onChange(opt.value)} className="sr-only" />
                        <span className="block text-sm font-medium">{opt.value}</span>
                        {opt.desc && (
                            <span
                                className={`block text-xs mt-0.5 ${
                                    active ? "text-[color:var(--warmwhite)]/70" : "text-[color:var(--muted-foreground)]"
                                }`}
                            >
                {opt.desc}
              </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
