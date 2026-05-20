export default function FilterBarClearButton({ children }: {
    children: React.ReactNode;
}) {
    return (
        <button className="text-xs font-bold uppercase tracking-widest text-stone-400 px-3 py-2 hover:text-stone-900 transition-colors cursor-pointer">{children}</button>
    );
}