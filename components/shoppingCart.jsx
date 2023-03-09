import Product from "./product";
import { BsXLg } from "react-icons/bs";
import { useAppContext } from "./stateWrapper";

export default function ShoppingCart() {
    const cart = useAppContext();
    const openStyle = cart.isOpen ? "right-0" : "right-full";
    const isHide = cart.isOpen ? "block" : "hidden";

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
                className={`fixed top-0 bottom-0 z-20 px-10 bg-[#efefef] shadow-2xl shadow-gray-500 ${openStyle} ${isHide}`}
            >
                <button
                    className="text-2xl mt-8 flex justify-end w-full"
                    onClick={handleCloseCart}
                >
                    <BsXLg />
                </button>

                {cart.items.length === 0 ? (
                    <div className="flex justify-center items-center h-full">
                        <p>Cart is empty</p>
                    </div>
                ) : (
                    <div className="w-[364px]">
                        {/* Items de card en carrito */}
                        <h3 className="font-bold mt-8 text-xl">Your items</h3>
                        <div className="overflow-y-scroll h-[calc(100vh-172px)]">
                            <div className="flex flex-col gap-4 mt-4">
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
                        <div className="absolute bottom-10 bg-[#efefef]">
                            <div className="border-b-2 border-gray-300 opacity-70 w-full mt-12 mb-6"></div>
                            <div className="">
                                <div className="text-2xl font-bold mb-6 text-right">
                                    Total: ${getTotal()}
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="border border-slate-800 rounded-full px-4 py-2"
                                        onClick={handleCloseCart}
                                    >
                                        Agregar mas productos
                                    </button>
                                    <button className="bg-slate-800 rounded-full px-4 py-2 text-white">
                                        Finalizar compra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
