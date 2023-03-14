import { BsCreditCard, BsBoxSeam, BsShieldCheck } from "react-icons/bs";

export default function Info() {
    return (
        <section className="flex h-auto m-32 gap-20 justify-center">
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsCreditCard className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    Choose how to pay
                </h3>
                <p className="text-gray-600 pt-2">
                    You can pay by credit card, debit card, cash or up to 12
                    installments with your credit card.
                </p>
            </div>
            <div className="border-l-gray-300 border"></div>
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsBoxSeam className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    Free shipping from $8,000
                </h3>
                <p className="text-gray-600 pt-2">
                    Enjoy the benefits of free shipping on thousands of our
                    products. From electronics to home goods
                </p>
            </div>
            <div className="border-l-gray-300 border"></div>
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsShieldCheck className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    End-to-End Security Guaranteed
                </h3>
                <p className="text-gray-600 pt-2">
                    Don't like it? Return it hassle-free! There's nothing you
                    can't do because you're always protected.
                </p>
            </div>
        </section>
    );
}
