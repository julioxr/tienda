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
            <div className="fixed -z-10 h-20 w-full shadow-sm"></div>
            <nav className="container mx-auto h-20">
                <div className="container fixed z-10 mx-auto flex h-20 items-center justify-between gap-4 bg-[#efefef] p-8 sm:p-0 sm:px-2">
                    {/* Logo */}
                    <div className="order-2">
                        <Link href="/">
                            <h2 className="text-2xl font-extrabold">
                                T I E N D A
                            </h2>
                        </Link>
                    </div>
                    {/* Burger Menu */}
                    <IoMdMenu className="order-1 text-3xl sm:hidden" />
                    {/* Menu */}
                    <div className="order-2 flex gap-20">
                        <div className="hidden gap-6 bg-transparent font-semibold sm:flex">
                            <Link
                                href="/"
                                className="decoration-pink-500 decoration-[3px] hover:underline"
                            >
                                Home
                            </Link>
                            <Link
                                href="/store"
                                className="decoration-pink-500 decoration-[3px] hover:underline"
                            >
                                Store
                            </Link>
                            <Link
                                href="/faq"
                                className="decoration-pink-500 decoration-[3px] hover:underline"
                            >
                                FAQ
                            </Link>
                        </div>
                        {/* Cart */}
                        <div className="bg-transparent">
                            <a
                                href="#"
                                className="flex items-center justify-center bg-transparent"
                                onClick={handleOpenCart}
                            >
                                <BsCart2 className="text-xl" />
                                <span className="-mt-6 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[0.6rem] text-white">
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
