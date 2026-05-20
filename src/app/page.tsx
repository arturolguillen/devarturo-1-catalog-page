import FilterBar from "@/components/FilterBar";
import FilterBarButton from "@/components/FilterBarButton";
import FilterBarClearButton from "@/components/FilterBarClearButton";
import FilterBarSeparator from "@/components/FilterBarSeparator";
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
                <FilterBar>
                    <FilterBarButton>{'Tueste'}</FilterBarButton>
                    <FilterBarButton>{'Región'}</FilterBarButton>
                    <FilterBarButton>{'Equipamento'}</FilterBarButton>
                    <FilterBarSeparator />
                    <FilterBarClearButton>{'Limpiar filtros'}</FilterBarClearButton>
                </FilterBar>
            </main>
        </>
    );
}
