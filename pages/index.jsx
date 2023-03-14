import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import Info from "@/components/info";

export default function Home({ items }) {
    return (
        <>
            <Layout title="Home">
                {/* <h1 className="text-3xl my-6">Este es el home</h1> */}
                <div className="mt-10 bg-black bg-cover h-[500px] bg-[url('https://images.pexels.com/photos/5650052/pexels-photo-5650052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');]">
                    <div className="bg-black opacity-40 h-[500px]">
                        <div className="w-2/3 lg:w-1/2 p-12 text-white">
                            <h2 className="text-6xl font-bold mb-6">
                                Discover the Latest Tech Collection
                            </h2>
                            <p className="lg:w-2/3">
                                Upgrade your digital lifestyle today with our
                                latest collection of cutting-edge tech devices
                                designed to keep you connected on-the-go.
                            </p>
                        </div>
                    </div>
                </div>

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
