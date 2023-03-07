import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";

export default function Index({ items }) {
    return (
        <>
            <Layout title="Store">
                <div className="flex items-center justify-between pb-8 pt-4">
                    <h1 className="text-base font-bold my-6">STORE</h1>
                    <select
                        name=""
                        id=""
                        className="w-36 h-10 px-4 appearance-none"
                    >
                        <option value="">Destacados</option>
                    </select>
                </div>

                <div className="mx-auto md:w-[768px] lg:w-[992px] 2xl:w-[1400px]">
                    <div className="flex justify-center lg:justify-start 2xl:justify-center gap-x-4 gap-y-8 pb-20 flex-wrap ">
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
    const res = await getItems();
    return {
        props: {
            items: res,
        },
    };
}
