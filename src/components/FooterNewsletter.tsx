export default function FooterNewsletter({ title }: {
    title: string;
}) {
    return (
        <div className="col-span-1 md:col-span-4 space-y-4">
            <p className="text-xs font-bold text-stone-900 uppercase tracking-widest">{title}</p>
            <form action="#" method="post" className="flex flex-col gap-4">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border-0 border-b border-stone-200 py-2 focus:ring-0 focus:border-stone-900 placeholder:text-stone-400 transition-colors outline-0"
                    placeholder={'Email'}
                />
                <button type="submit" className="bg-stone-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors w-fit cursor-pointer">{'Unirse'}</button>
            </form>
        </div>
    );
}