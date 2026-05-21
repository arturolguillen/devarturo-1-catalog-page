import type { FooterMenuItem } from "@/footerMenuItems";
import clsx from "clsx";
import Link from "next/link";

export default function FooterMenu({ title, items }: {
    title: string;
    items: FooterMenuItem[];
}) {
    return (
        <div className="md:col-span-2 col-span-1 mb-8 space-y-4">
            <p className="text-xs font-bold text-stone-900 uppercase tracking-widest">{title}</p>
            <ul className="flex flex-col gap-2">
                {items.map(item => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            className={clsx({
                                'hover:text-stone-900 transition-colors duration-200': true,
                                'underline underline-offset-4 decoration-stone-300': item.active,
                            })}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}