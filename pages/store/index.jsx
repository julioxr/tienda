import Select from "react-select";
import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getTestItems } from "../api/items";
import { useAppContext } from "@/components/stateWrapper";

export default function Index({ items }) {
    const { isMenuOpen } = useAppContext();

    const options = [
        { value: "photography", label: "Photography" },
        { value: "audio", label: "Audio" },
        { value: "drones", label: "Drones" },
        { value: "objects", label: "Everyday objects" },
        { value: "instruments", label: "Instruments" },
    ];

    return (
        <>
            <div className={`${isMenuOpen ? "fixed" : ""}`}>
                <Layout title="Store">
                    <div className="flex items-center justify-between px-8 pb-8 pt-4 sm:px-0">
                        <h1 className="my-6 text-base font-bold">STORE</h1>
                        <Select
                            isClearable
                            options={options}
                            classNames={{
                                control: (state) => "w-50 sm:w-60",
                            }}
                            placeholder="Filter by category"
                            onChange={() => {}}
                        />
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
            </div>
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
