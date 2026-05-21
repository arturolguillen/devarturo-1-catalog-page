import { v4 as uuidv4 } from "uuid";
import { StaticImageData } from "next/image";
import ArabicaReserveImage from "./images/high_end_specialty_coffee_beans_package_minimalist_design_neutral_background.png";
import LatteArtWorkshopImage from "./images/barista_pouring_latte_art_in_a_ceramic_cup_minimalist_aesthetic_steam_rising.png";
import BotanicalCherriesImage from "./images/single_origin_coffee_cherries_on_a_branch_vibrant_red_high_contrast_clean.png";
import MinimalPourOverKitImage from "./images/elegant_glass_pour_over_coffee_maker_on_a_marble_countertop_morning_light_clean.png";

export type Product = {
    id: string;
    name: string;
    description: string;
    tag: string;
    price: number;
    image: StaticImageData;
    addToCartText: string;
};

const products: Product[] = [
    {
        id: uuidv4(),
        name: 'Arabica Reserve',
        description: 'Cuerpo sedoso con matices de chocolate y caramelo.',
        tag: 'Colombia • Edición Especial',
        price: 28,
        image: ArabicaReserveImage,
        addToCartText: 'Añadir rápido',
    },
    {
        id: uuidv4(),
        name: 'Latte Art Workshop',
        description: 'Técnicas avanzadas de vertido y emulsión.',
        tag: 'Experiencia • Masterclass',
        price: 95,
        image: LatteArtWorkshopImage,
        addToCartText: 'Reservar plaza',
    },
    {
        id: uuidv4(),
        name: 'Botanical Cherries',
        description: 'Lámina de colección sobre el origen del fruto.',
        tag: 'Educativo • Impresión',
        price: 45,
        image: BotanicalCherriesImage,
        addToCartText: 'Ver detalles',
    },
    {
        id: uuidv4(),
        name: 'Minimal Pour-Over Kit',
        description: 'La esencia del café manual en tu cocina.',
        tag: 'Accesorios • Diseño',
        price: 135,
        image: MinimalPourOverKitImage,
        addToCartText: 'Añadir al carrito',
    },
];

export default products;