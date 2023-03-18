import Product from "./product";
import Image from "next/image";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { useAppContext } from "./stateWrapper";
import carrito from "../public/carrito.svg";

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
                className={`fixed top-0 bottom-0 z-20 bg-[#efefef] px-10 shadow-2xl shadow-gray-500 ${openStyle} ${isHide}`}
            >
                <button
                    className="mt-8 flex w-full justify-end text-2xl"
                    onClick={handleCloseCart}
                >
                    <BsXLg />
                </button>

                {cart.items.length === 0 ? (
                    <div className="flex h-[calc(100vh-150px)] w-[364px] flex-col items-center justify-center gap-12">
                        <Image
                            src={carrito}
                            alt="Carrito"
                            width={300}
                            height={300}
                        />
                        <p className="-mt-6 text-xl font-bold text-gray-700">
                            Cart is empty
                        </p>
                    </div>
                ) : (
                    <div className="w-[364px]">
                        {/* Items de card en carrito */}
                        <h3 className="mt-8 text-xl font-bold">Your items</h3>
                        <div className="h-[calc(100vh-172px)] overflow-y-scroll">
                            <div className="mt-4 flex flex-col gap-4">
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
                            <div className="mt-12 mb-6 w-full border-b-2 border-gray-300 opacity-70"></div>
                            <div className="">
                                <div className="mb-6 text-right text-2xl font-bold">
                                    Total: ${getTotal()}
                                </div>
                                <div className="flex gap-4">
                                    <Link href={"/store"}>
                                        <button
                                            className="rounded-full border border-slate-800 px-4 py-2"
                                            onClick={handleCloseCart}
                                        >
                                            Agregar mas productos
                                        </button>
                                    </Link>

                                    <button className="rounded-full bg-slate-800 px-4 py-2 text-white">
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
