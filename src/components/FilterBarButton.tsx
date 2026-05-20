export default function FilterBarButton({ children }: {
    children: React.ReactNode;
}) {
    return (
        <button className="text-xs font-bold uppercase tracking-widest text-stone-900 px-3 py-2 border-b-2 border-transparent hover:border-stone-900 cursor-pointer">{children}</button>
    );
}