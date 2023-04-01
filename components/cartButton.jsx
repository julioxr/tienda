import { useAppContext } from "./stateWrapper";

export default function CartButton({ item, setAdded, setShowToast }) {
    const cart = useAppContext();

    function handleClick() {
        cart.addItemToCart(item);
        setAdded(true);
        setShowToast(true);
        setTimeout(() => {
            setAdded(false);
            setShowToast(false);
        }, 1500);

        // cart.openCart();
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
