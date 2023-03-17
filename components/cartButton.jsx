import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }) {
    const cart = useAppContext();

    function handleClick() {
        cart.addItemToCart(item);
        cart.openCart();
    }

    return (
        <button
            className="h-12 rounded-full bg-gray-800 px-6 align-middle text-white"
            onClick={handleClick}
        >
            Add to cart
        </button>
    );
}
