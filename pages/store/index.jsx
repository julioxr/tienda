import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import { getTestItems } from "../api/items";

export default function Index({ items }) {
    return (
        <>
            <Layout title="Store">
                <div className="flex items-center justify-between px-8 pb-8 pt-4 sm:px-0">
                    <h1 className="my-6 text-base font-bold">STORE</h1>
                    <select
                        name=""
                        id=""
                        className="h-10 w-36 appearance-none px-4"
                    >
                        <option value="">Destacados</option>
                    </select>
                </div>

                <div className="mx-auto md:w-[768px] lg:w-[992px] 2xl:w-[1400px]">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 pb-20 lg:justify-start 2xl:justify-center ">
                        {items &&
                            items.map((item) => (
                                <Product item={item} key={item.id} />
                            ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const res = getTestItems();
    return {
        props: {
            items: res,
        },
    };
}
