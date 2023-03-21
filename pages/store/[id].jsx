import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { useAppContext } from "@/components/stateWrapper";

import { getPathsFromIds, getItemData } from "@/lib/utils";

export default function ProductPage({ productInfo }) {
    const { isMenuOpen } = useAppContext();
    return (
        <>
            <div className={`${isMenuOpen ? "fixed" : ""}`}>
                <Layout title={`| ${productInfo.data.title}`}>
                    <Product item={productInfo.data} showAs="Page" />
                </Layout>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getPathsFromIds();
    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product,
        },
    };
}
