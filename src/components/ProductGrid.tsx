export default function ProductGrid({ children }: {
    children: React.ReactNode;
}) {
    return (
        <section className="px-6 max-w-7xl mx-auto pb-24">
            <div className="columns-1 md:columns-2 gap-8 space-y-12">
                {children}
            </div>
        </section>
    );
}