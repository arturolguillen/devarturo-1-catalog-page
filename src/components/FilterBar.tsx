"use client";

import { InView } from "react-intersection-observer";

export default function FilterBar({ children }: {
    children: React.ReactNode;
}) {
    const handleEntrance = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (!inView) {
            return;
        }

        entry.target.classList.remove('opacity-0', 'translate-y-5');
        entry.target.classList.add('opacity100', 'translate-y-0');
    }

    return (
        <InView
            as="section"
            className="mb-12 px-6 max-w-7xl mx-auto translate-y-5 transition-all duration-700 ease-out delay-100 opacity-0"
            triggerOnce={true}
            threshold={0.1}
            rootMargin="0px 0px -50px 0px"
            onChange={handleEntrance}
        >
            <div className="flex items-center gap-6 border-b border-stone-200 pb-2 md:justify-center overflow-x-auto snap-x *:snap-center *:shrink-0">
                {children}
            </div>
        </InView>
    );
}