import { BsCreditCard, BsBoxSeam, BsShieldCheck } from "react-icons/bs";

export default function Info() {
    return (
        <section className="m-12 flex h-auto flex-col justify-center gap-4 sm:m-32 sm:flex-row sm:gap-20">
            <div className="mx-auto flex max-w-xs  flex-col items-center justify-center text-center">
                <BsCreditCard className="mb-4 text-6xl text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">
                    Choose how to pay
                </h3>
                <p className="pt-2 text-gray-600">
                    You can pay by credit card, debit card, cash or up to 12
                    installments with your credit card.
                </p>
            </div>
            <div className="border border-l-gray-300"></div>
            <div className="mx-auto flex  max-w-xs flex-col items-center justify-center text-center">
                <BsBoxSeam className="mb-4 text-6xl text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">
                    Free shipping from $8,000
                </h3>
                <p className="pt-2 text-gray-600">
                    Enjoy the benefits of free shipping on thousands of our
                    products. From electronics to home goods
                </p>
            </div>
            <div className="border border-l-gray-300"></div>
            <div className="mx-auto flex  max-w-xs flex-col items-center justify-center text-center">
                <BsShieldCheck className="mb-4 text-6xl text-gray-700" />
                <h3 className="text-lg font-medium text-gray-800">
                    End-to-End Security Guaranteed
                </h3>
                <p className="pt-2 text-gray-600">
                    Don't like it? Return it hassle-free! There's nothing you
                    can't do because you're always protected.
                </p>
            </div>
        </section>
    );
}
