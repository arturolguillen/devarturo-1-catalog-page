"use client";

import { InView } from "react-intersection-observer";
import Image from "next/image";
import type { Product } from "@/products"

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

    const handleEntrance = (inView: boolean, entry: IntersectionObserverEntry) => {
        if (!inView) {
            return;
        }

        entry.target.classList.remove('opacity-0', 'translate-y-5');
        entry.target.classList.add('opacity100', 'translate-y-0');
    }

    return (
        <InView
            as="div"
            className="break-inside-avoid group translate-y-5 transition-all duration-700 ease-out opacity-0"
            triggerOnce={true}
            threshold={0.1}
            rootMargin="0px 0px -50px 0px"
            onChange={handleEntrance}
        >
            <div className="relative overflow-hidden bg-stone-200">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-8 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap hover:bg-stone-900 hover:text-white cursor-pointer shadow-sm transition-all ease-out xl:opacity-0 xl:translate-y-2.5 xl:group-hover:opacity-100 xl:group-hover:translate-y-0">{addToCartText}</button>
            </div>
            <div className="mt-4">
                <p className="text-xs text-stone-900 uppercase tracking-wide mb-1">{tag}</p>
                <h3 className="font-heading text-2xl font-medium text-stone-900">{name}</h3>
                <p className="text-stone-600 italic">{description}</p>
                <p className="mt-2 font-bold text-stone-900">{formattedPrice}</p>
            </div>
        </InView>
    );
}