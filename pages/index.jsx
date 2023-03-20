import { Layout } from "@/components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import Info from "@/components/info";
import Hero from "@/components/hero";
import { useAppContext } from "@/components/stateWrapper";

export default function Home({ items }) {
    const { isMenuOpen } = useAppContext();
    return (
        <>
            {/* Este div es solo para poner fixed todo cuando se abre el menu hamburguesa y no se pueda scrollear */}
            <div className={`${isMenuOpen ? "fixed" : ""}`}>
                <Layout title="Home">
                    <div>
                        <Hero />
                        <h3 className="mt-8 pl-8 text-xl font-bold sm:pl-0">
                            Featured Products
                        </h3>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            {items &&
                                items.map((item) => (
                                    <Product
                                        key={item.id}
                                        item={item}
                                        showAs="carrousel"
                                    />
                                ))}
                        </div>
                        <Info />
                    </div>
                </Layout>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = getLatestItems();
    return {
        props: {
            items: res,
        },
    };
}
