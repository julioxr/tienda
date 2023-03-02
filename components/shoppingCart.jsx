import Product from "./product";
import { useAppContext } from "./stateWrapper";

export default function ShoppingCart() {
    const cart = useAppContext();
    const openStyle = cart.isOpen ? "right-0" : "right-full";

    const handleCloseCart = () => {
        cart.closeCart();
    };

    const getTotal = () => {
        const total = cart.items.reduce(
            // el reduce tiene que retornar un valor
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        return total;
    };

    return (
        <>
            <div
                className={`fixed top-0 bottom-0 w-72 bg-slate-400 ${openStyle}`}
            >
                <button
                    className="bg-slate-800 rounded-full w-28 text-white h-8 mx-4"
                    onClick={handleCloseCart}
                >
                    Close
                </button>

                {cart.items.length === 0 ? (
                    <div className="flex justify-center items-center h-full">
                        <p>Cart is empty</p>
                    </div>
                ) : (
                    <>
                        <h3>Your items</h3>
                        <div>
                            {cart.items.map((item) => (
                                <Product
                                    key={item.id}
                                    item={item}
                                    showAs="ListItem"
                                    quantity={item.quantity}
                                />
                            ))}
                        </div>
                        <div>Total: ${getTotal()}</div>
                    </>
                )}
            </div>
        </>
    );
}
