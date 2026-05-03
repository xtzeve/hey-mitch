import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatSection } from "@/components/sections/what-section";
import { WhySection } from "@/components/sections/why-section";
import { HowSection } from "@/components/sections/how-section";
import { HearMitchSection } from "@/components/sections/hear-mitch-section";
import { ClosingSection } from "@/components/sections/closing-section";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "MITCH — Precision outbound. Awareness & Comprehension at scale." },
            {
                name: "description",
                content:
                    "MITCH opens the conversation. Your team closes it. A precision outbound service that creates Awareness and Comprehension at scale.",
            },
            { property: "og:title", content: "MITCH — Precision outbound at scale" },
            {
                property: "og:description",
                content:
                    "MITCH opens the conversation. Your team closes it. Configure a live demo built around your business.",
            },
            { property: "og:type", content: "website" },
        ],
    }),
    component: Index,
});

function Index() {
    return (
        <div className="min-h-screen bg-[color:var(--background)]">
            <SiteHeader />
            <main>
                <HeroSection />
                <WhatSection />
                <WhySection />
                <HowSection />
                <HearMitchSection />
                <ClosingSection />
            </main>
            <SiteFooter />
            <StickyCta />
        </div>
    );
}