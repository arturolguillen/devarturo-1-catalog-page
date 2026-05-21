import Link from "next/link";


export default function NavbarLinks() {
    return (
        <div className="flex-1 hidden md:flex gap-8">
            <Link href={'#'} className="text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-0.5">{'Tienda'}</Link>
            <Link href={'#'} className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors pb-0.5">{'Historia'}</Link>
            <Link href={'#'} className="text-xs font-medium uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors pb-0.5">{'Ubicaciones'}</Link>
        </div>
    );
}