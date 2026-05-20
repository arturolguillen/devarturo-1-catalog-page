import Navbar from "@/components/Navbar";
import NavbarLinks from "@/components/NavbarLinks";
import NavbarShoppingBagButton from "@/components/NavbarShoppingBagButton";
import NavbarTitle from "@/components/NavbarTitle";
import PageHeader from "@/components/PageHeader";
import PageHeaderDescription from "@/components/PageHeaderDescription";
import PageHeaderTitle from "@/components/PageHeaderTitle";

export default function Home() {
    return (
        <>
            <Navbar
                links={<NavbarLinks />}
                title={<NavbarTitle />}
                shoppingBagButton={<NavbarShoppingBagButton />}
            />
            <main className="mt-20">
                <PageHeader
                    title={<PageHeaderTitle />}
                    description={<PageHeaderDescription />}
                />
            </main>
        </>
    );
}
