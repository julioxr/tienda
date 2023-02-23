import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";

export default function Index({ items }) {
    return (
        <>
            <Layout title="Store">
                <h1 className="text-3xl my-6">Estas en el store</h1>
                <div className="flex gap-4 flex-wrap mx-auto">
                    {items &&
                        items.map((item) => (
                            <Product item={item} key={item.id} />
                        ))}
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const res = await getItems();
    return {
        props: {
            items: res,
        },
    };
}
