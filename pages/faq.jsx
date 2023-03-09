import Link from "next/link";
import { Layout } from "@/components/layout";
export default function faq() {
    return (
        <>
            <Layout title="FAQ">
                <div className="h-[calc(100vh-304px)]">
                    <h2 className="text-3xl mt-6 mb-8">FAQ</h2>

                    <div>
                        <h3 className="font-bold text-lg mb-1">
                            Can I update the quantity of items in my shopping
                            cart?
                        </h3>
                        <p className="pb-6 font-thin">
                            Yes, you can update the quantity of items in your
                            shopping cart by changing the number in the
                            "Quantity" field and clicking "Update Cart."
                        </p>
                        <h3 className="font-bold text-lg mb-1">
                            Can I remove an item from my shopping cart?
                        </h3>
                        <p className="pb-6 font-thin">
                            Yes, you can remove an item from your shopping cart
                            by clicking on the "Remove" button next to the item
                            you want to remove.
                        </p>
                        <h3 className="font-bold text-lg mb-1">
                            Is it possible to save items in my shopping cart for
                            later?
                        </h3>
                        <p className="pb-6 font-thin">
                            Yes, you can save items in your shopping cart for
                            later by clicking on the "Save for Later" button.
                            The item will be removed from your shopping cart and
                            added to a separate list.
                        </p>
                        <h3 className="font-bold text-lg mb-1">
                            Can I apply a coupon code to my order?
                        </h3>
                        <p className="pb-6 font-thin">
                            Yes, you can apply a coupon code to your order by
                            entering the code in the "Coupon Code" field and
                            clicking "Apply Coupon." The discount will be
                            applied to your order total.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}
