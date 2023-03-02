import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }) {
    const cart = useAppContext();

    function handleClick() {
        cart.addItemToCart(item);
    }

    return (
        <button
            className="bg-slate-800 rounded-full w-28 text-white h-8"
            onClick={handleClick}
        >
            Add to cart
        </button>
    );
}
