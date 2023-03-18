import { useAppContext } from "../stateWrapper";
import { BsCart2 } from "react-icons/bs";

export default function MenuCart() {
    const cart = useAppContext();

    const handleOpenCart = () => {
        cart.openCart();
    };
    return (
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
    );
}
