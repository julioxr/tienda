import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import Info from "@/components/info";
import Hero from "@/components/hero";

export default function Home({ items }) {
    return (
        <>
            <Layout title="Home">
                <Hero />
                <h3 className="font-bold mt-8 text-xl">Featured Products</h3>
                <div className="flex gap-4 justify-center mt-4">
                    {items &&
                        items.map((item) => (
                            <Product key={item.id} item={item} showAs="item" />
                        ))}
                </div>
                <Info />
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const res = await getLatestItems();
    return {
        props: {
            items: res,
        },
    };
}
