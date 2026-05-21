import FilterBar from "@/components/FilterBar";
import FilterBarButton from "@/components/FilterBarButton";
import FilterBarClearButton from "@/components/FilterBarClearButton";
import FilterBarSeparator from "@/components/FilterBarSeparator";
import Footer from "@/components/Footer";
import FooterCopy from "@/components/FooterCopy";
import FooterMenu from "@/components/FooterMenu";
import FooterNewsletter from "@/components/FooterNewsletter";
import FooterTitle from "@/components/FooterTitle";
import Navbar from "@/components/Navbar";
import NavbarLinks from "@/components/NavbarLinks";
import NavbarShoppingBagButton from "@/components/NavbarShoppingBagButton";
import NavbarTitle from "@/components/NavbarTitle";
import PageHeader from "@/components/PageHeader";
import PageHeaderDescription from "@/components/PageHeaderDescription";
import PageHeaderTitle from "@/components/PageHeaderTitle";
import ProductGrid from "@/components/ProductGrid";
import ProductItem from "@/components/ProductItem";
import { mainMenuItems, secondaryMenuItems } from "@/footerMenuItems";
import products from "@/products";

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
                <ProductGrid>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ProductGrid>
            </main>
            <Footer>
                <FooterTitle />
                <FooterMenu
                    title={'Navegación'}
                    items={mainMenuItems}
                />
                <FooterMenu
                    title={'Legal'}
                    items={secondaryMenuItems}
                />
                <FooterNewsletter title={'Newsletter'} />
                <FooterCopy />
            </Footer>
        </>
    );
}
