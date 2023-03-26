import { Layout } from "@/components/layout";
import { useAppContext } from "@/components/stateWrapper";
import Product from "@/components/product";
import CheckoutForm from "@/components/checkoutForm";

export default function Checkout() {
    const { items, getTotal } = useAppContext();

    return (
        <Layout>
            <section className="min-h-[calc(100vh-340px)] px-8 sm:min-h-[calc(100vh-280px)] md:px-0">
                <h1 className="my-6 text-base font-bold">CHECKOUT</h1>
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="flex max-w-[600px] flex-col pb-8 md:w-1/2 md:pb-0">
                        {items.map((item) => (
                            <Product
                                key={item.id}
                                item={item}
                                showAs="checkout"
                                quantity={item.quantity}
                            />
                        ))}
                        <div className="self-end">
                            <h3 className="pt-4 text-2xl font-bold">
                                Total: ${getTotal()}
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold">
                            Complete con sus datos
                        </h2>

                        <div className="w-full">
                            <CheckoutForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
