import React, { useEffect, useState } from 'react';

type SectionId = 'summary' | 'work' | 'social';

const sectionTitles: Record<SectionId, string> = {
    summary: 'About',
    work: 'Work',
    social: 'Social',
};

const SectionIndicator = (): JSX.Element => {
    const [activeSection, setActiveSection] = useState<SectionId>('summary');

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        const allSectionIds = Object.keys(sectionTitles) as SectionId[];
        const sections = allSectionIds
            .map((id) => document.getElementById(id))
            .filter((element): element is HTMLElement => element !== null);
        const sectionIds = sections.map((section) => section.id as SectionId);

        if (sections.length === 0) {
            return;
        }

        const updateActiveSection = (): void => {
            const marker = window.innerHeight * 0.45;
            let nextSection = sectionIds[0];

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= marker) {
                    nextSection = section.id as SectionId;
                } else {
                    break;
                }
            }

            setActiveSection((prevSection) => (prevSection === nextSection ? prevSection : nextSection));
        };

        let rafId: number | null = null;
        const onViewportChange = (): void => {
            if (rafId !== null) {
                return;
            }

            rafId = window.requestAnimationFrame(() => {
                updateActiveSection();
                rafId = null;
            });
        };

        updateActiveSection();
        const intervalId = window.setInterval(updateActiveSection, 250);
        window.addEventListener('scroll', onViewportChange, { passive: true });
        document.addEventListener('scroll', onViewportChange, { passive: true });
        window.addEventListener('resize', onViewportChange);

        return () => {
            window.clearInterval(intervalId);
            window.removeEventListener('scroll', onViewportChange);
            document.removeEventListener('scroll', onViewportChange);
            window.removeEventListener('resize', onViewportChange);

            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <div className="pointer-events-none fixed left-3 top-1/2 z-20 -translate-y-1/2 sm:left-5">
            <p className="[writing-mode:vertical-rl] rotate-180 text-base font-extrabold uppercase tracking-[0.24em] text-slate-500 transition-colors duration-500 dark:text-slate-400 sm:text-lg md:text-xl">
                {sectionTitles[activeSection]}
            </p>
        </div>
    );
};

export default SectionIndicator;
