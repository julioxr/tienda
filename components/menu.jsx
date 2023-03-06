import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

import { useAppContext } from "./stateWrapper";

export default function Menu() {
    const cart = useAppContext();

    const handleOpenCart = () => {
        cart.openCart();
    };

    return (
        <>
            <div className="absolute shadow-sm w-full h-20 -z-10"></div>
            <nav className="flex justify-between h-20 items-center container mx-auto">
                <div>
                    <h2 className="text-2xl font-extrabold">T I E N D A</h2>
                </div>
                <div className="flex gap-20">
                    <div className="flex font-semibold bg-transparent gap-6">
                        <Link href="/" className="bg-transparent">
                            Home
                        </Link>
                        <Link href="/store" className="bg-transparent">
                            Store
                        </Link>
                        <Link href="/faq" className="bg-transparent">
                            FAQ
                        </Link>
                    </div>
                    <div className="bg-transparent">
                        <a
                            href="#"
                            className="bg-transparent flex justify-center items-center gap-2"
                            onClick={handleOpenCart}
                        >
                            <BsCart2 className="text-xl" /> (
                            {cart.getNumberOfItems()})
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
