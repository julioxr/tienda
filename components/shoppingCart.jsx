import Product from "./product";
import { BsXLg } from "react-icons/bs";
import { useAppContext } from "./stateWrapper";
import CartEmpty from "./cart/cartEmpty";
import CartFooter from "./cart/cartFooter";

export default function ShoppingCart() {
    const { isCartOpen, closeCart, items } = useAppContext();
    const openStyle = isCartOpen ? "right-0" : "right-full";
    const isHide = isCartOpen ? "block" : "hidden";

    const getTotal = () => {
        const total = items.reduce(
            // el reduce tiene que retornar un valor
            (acc, item) => acc + item.quantity * item.price,
            0
        );
        return total.toLocaleString("es-AR");
    };

    return (
        <>
            <div
                className={`fixed top-0 bottom-0 z-20 w-full bg-[#efefef] px-6 shadow-2xl shadow-gray-500 sm:w-[450px] sm:px-10 ${openStyle} ${isHide}`}
            >
                <button
                    className="mt-8 flex w-full justify-end text-2xl"
                    onClick={closeCart}
                >
                    <BsXLg />
                </button>

                {items.length === 0 ? (
                    <CartEmpty />
                ) : (
                    <div className="relative h-[calc(100vh-150px)] w-full sm:w-[364px]">
                        {/* Items de card en carrito */}
                        <h3 className="mt-8 text-xl font-bold">Your items</h3>
                        <div className="h-[calc(100vh-350px)] overflow-y-auto">
                            {/* <div className="h-[calc(100vh-162px)] bg-green-300"> */}
                            <div className="mt-4 flex flex-col gap-4 sm:px-2">
                                {items.map((item) => (
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
                            handleCloseCart={closeCart}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
