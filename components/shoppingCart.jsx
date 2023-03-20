import Product from "./product";
import { BsXLg } from "react-icons/bs";
import { useAppContext } from "./stateWrapper";
import CartEmpty from "./cart/cartEmpty";
import CartFooter from "./cart/cartFooter";

export default function ShoppingCart() {
    const cart = useAppContext();
    const openStyle = cart.isCartOpen ? "right-0" : "right-full";
    const isHide = cart.isCartOpen ? "block" : "hidden";
    const totalPrice = cart;

    const handleCloseCart = () => {
        cart.closeCart();
    };

    const getTotal = () => {
        const total = cart.items.reduce(
            // el reduce tiene que retornar un valor
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        return total.toLocaleString("es-AR");
    };

    return (
        <>
            <div
                className={`fixed top-0 bottom-0 z-20 w-full bg-[#efefef] px-10 shadow-2xl shadow-gray-500 sm:w-[450px] ${openStyle} ${isHide}`}
            >
                <button
                    className="mt-8 flex w-full justify-end text-2xl"
                    onClick={handleCloseCart}
                >
                    <BsXLg />
                </button>

                {cart.items.length === 0 ? (
                    <CartEmpty />
                ) : (
                    <div className="relative h-[calc(100vh-140px)] w-full sm:w-[364px]">
                        {/* Items de card en carrito */}
                        <h3 className="mt-8 text-xl font-bold">Your items</h3>
                        <div className="h-[calc(100vh-350px)] overflow-y-auto">
                            {/* <div className="h-[calc(100vh-162px)] bg-green-300"> */}
                            <div className="mt-4 flex flex-col gap-4 px-2">
                                {cart.items.map((item) => (
                                    <Product
                                        key={item.id}
                                        item={item}
                                        showAs="ListItem"
                                        quantity={item.quantity}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Total con botones */}
                        <CartFooter
                            getTotal={getTotal}
                            handleCloseCart={handleCloseCart}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
