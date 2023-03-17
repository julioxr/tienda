import Link from "next/link";
import { useAppContext } from "../stateWrapper";
import { BsCart2 } from "react-icons/bs";

export default function MenuLinks({ position, setIsOpen }) {
    const cart = useAppContext();

    const handleOpenCart = () => {
        cart.openCart();
    };

    return (
        <div className="order-2 sm:flex sm:gap-20">
            {/* Links */}
            {/* Se setean las clases dependiendo si esta en mobile o pc */}
            <div className={`${position}`}>
                <Link
                    href="/"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/store"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onClick={() => setIsOpen(false)}
                >
                    Store
                </Link>
                <Link
                    href="/faq"
                    className="decoration-red-500 decoration-[3px] hover:underline"
                    onclick={() => setIsOpen(false)}
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
    );
}
