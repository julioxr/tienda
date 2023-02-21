import { Layout } from "@/components/layout";
import { getItems } from "@/services/itemService";
import Image from "next/image";

export default function Index({ items }) {
    return (
        <>
            <Layout title="Store">
                <h1 className="text-3xl mt-6">Estas en el store</h1>
                <div className="flex gap-8 flex-wrap">
                    {items &&
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-slate-50 rounded-md text-center shadow-sm p-4 mt-8 flex flex-col justify-around items-center w-80"
                            >
                                <h2 className="text-2xl">{item.title}</h2>
                                <Image
                                    src={item.image}
                                    width="200"
                                    height="200"
                                />
                                <p className="text-sm text-center pb-4">
                                    {item.descripcion}
                                </p>
                                <button className="bg-slate-500 rounded-full w-28 text-white h-8 ">
                                    Comprar
                                </button>
                            </div>
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
