import type { Product } from "@/products"
import Image from "next/image";

export default function ProductItem({ product }: {
    product: Product;
}) {
    const { name, description, tag, price, image, addToCartText } = product;
    const formattedPrice = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(price));

    return (
        <div className="break-inside-avoid group translate-y-5 transition-all duration-700 ease-out">
            <div className="relative overflow-hidden bg-stone-200">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-8 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 translate-y-2.5 transition-all divide-purple-400 ease-out group-hover:opacity-100 group-hover:translate-y-0 hover:bg-stone-900 hover:text-white cursor-pointer shadow-sm">{addToCartText}</button>
            </div>
            <div className="mt-4">
                <p className="text-xs text-stone-900 uppercase tracking-wide mb-1">{tag}</p>
                <h3 className="font-heading text-2xl font-medium text-stone-900">{name}</h3>
                <p className="text-stone-600 italic">{description}</p>
                <p className="mt-2 font-bold text-stone-900">{formattedPrice}</p>
            </div>
        </div>
    );
}