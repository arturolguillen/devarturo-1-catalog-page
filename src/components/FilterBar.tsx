export default function FilterBar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="mb-12 px-6 max-w-7xl mx-auto translate-y-5 transition-all duration-700 ease-out delay-100">
            <div className="flex items-center gap-6 border-b border-stone-200 pb-2 md:justify-center overflow-x-auto snap-x *:snap-center *:shrink-0">
                {children}
            </div>
        </section>
    );
}