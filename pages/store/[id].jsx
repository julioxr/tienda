import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getPathsFromIds, getItemData } from "@/lib/utils";

export default function ProductPage({ productInfo }) {
    return (
        <>
            <Layout>
                <Product item={productInfo} showAs="Page" />
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getPathsFromIds();
    console.log(paths);
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