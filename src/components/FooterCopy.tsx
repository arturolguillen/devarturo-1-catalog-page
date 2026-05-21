export default function FooterCopy() {
    const date = new Date;

    return (
        <div className="md:col-span-12 mt-8 pt-8 border-t border-stone-200/50 text-center">
            <p className="text-xs text-stone-400">&copy; {`${date.getFullYear()} Origin Specialty Coffee. Todos los derechos reservados.`}</p>
        </div>
    );
}