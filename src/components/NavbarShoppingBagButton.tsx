import { ShoppingBag } from "lucide-react";

export default function NavbarShoppingBagButton() {
    return (
        <div className="flex-1 flex justify-end items-center">
            <button className="hover:opacity-60 transition-opacity active:scale-95 duration-200 cursor-pointer">
                <ShoppingBag size={20} />
            </button>
        </div>
    );
}