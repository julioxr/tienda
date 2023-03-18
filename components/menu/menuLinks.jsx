import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import MenuCart from "./menuCart";
import { useAppContext } from "@/components/stateWrapper";

export default function MenuLinks({ position }) {
    const { isMenuOpen, handleCloseMenu } = useAppContext();

    return (
        <div className="order-2 sm:flex sm:gap-20">
            {/* Links */}
            {/* Se setean las clases dependiendo si esta en mobile o pc */}
            <div className={`${position}`}>
                {isMenuOpen && (
                    <div>
                        <div
                            className="pointer-events-auto absolute top-0 right-0 cursor-pointer p-8 text-2xl"
                            onClick={handleCloseMenu}
                        >
                            <BsXLg />
                        </div>
                    </div>
                )}

                <Link
                    href="/"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onClick={handleCloseMenu}
                >
                    Home
                </Link>
                <Link
                    href="/store"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onClick={handleCloseMenu}
                >
                    Store
                </Link>
                <Link
                    href="/faq"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onClick={handleCloseMenu}
                >
                    FAQ
                </Link>
            </div>
            {/* Cart */}
            <MenuCart />
        </div>
    );
}
