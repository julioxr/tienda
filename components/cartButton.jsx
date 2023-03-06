import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }) {
    const cart = useAppContext();

    function handleClick() {
        cart.addItemToCart(item);
        cart.openCart();
    }

    return (
        <button
            className="bg-gray-800 text-white align-middle h-12 rounded-full px-6"
            onClick={handleClick}
        >
            Add to cart
        </button>
    );
}
