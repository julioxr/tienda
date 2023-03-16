import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

import { useAppContext } from "./stateWrapper";

export default function Menu() {
    const cart = useAppContext();

    const handleOpenCart = () => {
        cart.openCart();
    };

    return (
        <>
            <div className="fixed shadow-sm w-full h-20 -z-10"></div>
            <nav className="h-20 mx-auto container">
                <div className="flex justify-between h-20 items-center container mx-auto fixed bg-[#efefef] z-10 gap-4 p-8">
                    {/* Logo */}
                    <div className="order-2">
                        <Link href="/">
                            <h2 className="text-2xl font-extrabold">
                                T I E N D A
                            </h2>
                        </Link>
                    </div>
                    {/* Burger Menu */}
                    <IoMdMenu className="text-3xl sm:hidden order-1" />
                    {/* Menu */}
                    <div className="gap-20 flex order-2">
                        <div className="sm:flex font-semibold bg-transparent gap-6 hidden">
                            <Link
                                href="/"
                                className="hover:underline decoration-[3px] decoration-pink-500"
                            >
                                Home
                            </Link>
                            <Link
                                href="/store"
                                className="hover:underline decoration-[3px] decoration-pink-500"
                            >
                                Store
                            </Link>
                            <Link
                                href="/faq"
                                className="hover:underline decoration-[3px] decoration-pink-500"
                            >
                                FAQ
                            </Link>
                        </div>
                        {/* Cart */}
                        <div className="bg-transparent">
                            <a
                                href="#"
                                className="bg-transparent flex justify-center items-center"
                                onClick={handleOpenCart}
                            >
                                <BsCart2 className="text-xl" />
                                <span className="bg-red-500 rounded-full text-white flex justify-center items-center h-5 w-5 text-[0.6rem] -mt-6">
                                    {cart.getNumberOfItems()}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
