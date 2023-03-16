import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
                <h3 className="mt-8 pl-8 text-xl font-bold sm:pl-0">
                    Featured Products
                </h3>
                <div className="mt-4 flex flex-wrap justify-center gap-4 pb-20">
                    {items &&
                        items.map((item) => (
                            <Product
                                key={item.id}
                                item={item}
                                showAs="carrousel"
                            />
                        ))}
                </div>
                {/* <Info /> */}
            </Layout>
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
