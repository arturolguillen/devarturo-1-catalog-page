"use client";

import { InView } from "react-intersection-observer";

export default function PageHeader({ children }: {
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
            as="header"
            className="pt-24 pb-8 px6 max-w-7xl mx-auto text-center translate-y-5 transition-all duration-700 ease-out space-y-3 opacity-0"
            triggerOnce={true}
            threshold={0.1}
            rootMargin="0px 0px -50px 0px"
            onChange={handleEntrance}
        >
            {children}
        </InView>
    );
}