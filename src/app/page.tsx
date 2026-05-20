import Navbar from "@/components/Navbar";
import NavbarLinks from "@/components/NavbarLinks";
import NavbarShoppingBagButton from "@/components/NavbarShoppingBagButton";
import NavbarTitle from "@/components/NavbarTitle";

export default function Home() {
    return (
        <>
            <Navbar
                links={<NavbarLinks />}
                title={<NavbarTitle />}
                shoppingBagButton={<NavbarShoppingBagButton />}
            />
        </>
    );
}
