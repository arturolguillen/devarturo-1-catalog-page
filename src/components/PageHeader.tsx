export default function PageHeader({ children }: {
    children: React.ReactNode;
}) {
    return (
        <header className="pt-24 pb-8 px6 max-w-7xl mx-auto text-center translate-y-5 transition-all duration-700 ease-out space-y-3">
            {children}
        </header>
    );
}