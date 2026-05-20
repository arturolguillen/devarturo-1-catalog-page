import { ShoppingBag } from "lucide-react";

export default function NavbarShoppingBagButton() {
    return (
        <button className="hover:opacity-60 transition-opacity active:scale-95 duration-200 cursor-pointer">
            <ShoppingBag size={20} />
        </button>
    );
}