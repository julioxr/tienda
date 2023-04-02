import { useState, useEffect } from "react";
import Select from "react-select";
import { Layout } from "@/components/layout";
import Product from "@/components/product";
import { getItemsApi } from "../api/items";
import { useAppContext } from "@/components/stateWrapper";

export default function Index({ items }) {
    const { isMenuOpen } = useAppContext();
    const [products, setProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const filterByCategory = (selectedOption) => {
        const copy = [...items];

        if (selectedOption === null) {
            setSelectedOption(null);
            setProducts(items);
        } else {
            const filteredCategory = copy.filter((item) => {
                return item.type === selectedOption.value;
            });
            setSelectedOption(selectedOption);
            setProducts(filteredCategory);
        }
    };

    useEffect(() => {
        setProducts(items);
    }, [items]);

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
                    <div className="flex items-center justify-between px-8  pt-4 sm:px-0">
                        <h1 className="my-6 text-base font-bold">STORE</h1>
                        <Select
                            isClearable
                            options={options}
                            classNamePrefix="my-select"
                            placeholder="Filter by category"
                            className="w-64"
                            onChange={filterByCategory}
                            instanceId
                            value={selectedOption}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-2 px-8 pb-8 text-sm  sm:px-0">
                        {/* <div className="flex w-44 justify-center gap-2 sm:w-60 sm:justify-end">
                            <p>Order by price:</p>
                            <BsFilter className="inline-block text-2xl" />
                            <BsFilter className="inline-block rotate-180 text-2xl" />
                        </div> */}
                    </div>

                    <div className="mx-auto md:w-[768px] lg:w-[992px] 2xl:w-[1400px] ">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 pb-20 lg:justify-start 2xl:justify-center ">
                            {products &&
                                products.map((item) => (
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
    const res = getItemsApi();
    return {
        props: {
            items: res,
        },
    };
}
