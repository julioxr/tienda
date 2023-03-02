import Link from "next/link";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
    const cart = useAppContext();

    const handleOpenCart = () => {
        cart.openCart();
    };

    return (
        <nav className="flex justify-around bg-blue-300 h-10 shadow-md items-center text-white">
            <div className="flex gap-10 font-semibold bg-transparent">
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
                <a href="#" className="bg-transparent" onClick={handleOpenCart}>
                    Cart ({cart.getNumberOfItems()})
                </a>
            </div>
        </nav>
    );
}
