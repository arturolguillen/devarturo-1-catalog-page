export default function Footer({ children }: {
    children: React.ReactNode;
}) {
    return (
        <footer className="bg-stone-100 text-stone-600 w-full pt-24 pb-8 border-t border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 max-w-7xl mx-auto">
                {children}
            </div>
        </footer>
    );
}