import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { MdRemove, MdAdd } from "react-icons/md";
import { convertToPath } from "@/lib/utils";
import CartButton from "./cartButton";
import ErrorMessage from "./errorMessage";
import { useAppContext } from "./stateWrapper";

export default function Product({ item, showAs, priceFormatter }) {
    const cart = useAppContext();
    const [error, setError] = useState(false);
    const disabled =
        item.quantity == 1 ? "text-gray-300 pointer-events-none" : "";

    const price = cart.priceFormatter(item);

    const handleQuantity = (e, item) => {
        const copy = [...cart.items];
        console.log(e.id);

        if (e.id === "remove") {
            if (item.quantity <= 1) {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            } else {
                item.quantity--;
            }
        } else if (e.id === "add") {
            setError(false);
            item.quantity++;
        }

        cart.setItems(copy);
    };

    if (showAs === "Page") {
        return (
            <div className="h-[calc(100vh-328px)]">
                <div className="flex bg-white justify-center items-center mt-12 max-w-4xl mx-auto">
                    <div>
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={600}
                            height={600}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-700">
                                {item.title}
                            </h2>
                        </div>
                        <div className="text-lg text-gray-400 font-semibold -mt-3">
                            ${price}
                        </div>
                        <div className="w-3/4 text-gray-500">
                            {item.descripcion}
                        </div>
                        <div className="mt-8">
                            <CartButton item={item} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (showAs === "ListItem") {
        return (
            <>
                <div className="flex gap-4 items-center p-4 bg-white rounded-md relative text-gray-500">
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={70}
                        height={70}
                    />
                    <div className="w-full">
                        <div className="font-medium text-lg text-gray-700">
                            {item.title}
                        </div>
                        <div className="pb-1">Cantidad:</div>
                        <div className="flex gap-2 text-xl text-gray-600">
                            <button
                                id="remove"
                                className={`flex justify-start items-center bg-gray-100 rounded ${disabled}`}
                                onClick={(e) => handleQuantity(e.target, item)}
                            >
                                <MdRemove />
                            </button>
                            <span className="flex justify-center items-center text-base font-medium">
                                {item.quantity}
                            </span>
                            <button
                                id="add"
                                className="flex justify-center items-center bg-gray-100 rounded"
                                onClick={(e) => handleQuantity(e.target, item)}
                            >
                                <MdAdd />
                            </button>
                        </div>
                        {/* Mensaje de error */}
                        {error && <ErrorMessage />}
                        <p className="text-right ">
                            Precio:{" "}
                            <span className="font-semibold">
                                $
                                {parseFloat(
                                    cart.priceFormatter() * item.quantity // convierte el string en number para poder multiplicar y luego agrego 3 decimales
                                ).toFixed(3)}
                            </span>
                        </p>
                        <div
                            className="absolute top-4 right-3 text-lg text-gray-700 cursor-pointer"
                            onClick={() => cart.filterItems(item.id)}
                        >
                            {/* FUNCION PARA ELIMINAR DE LA LISTA */}
                            <BsTrash3 />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="bg-white rounded-md text-center shadow-sm p-4 flex flex-col justify-around items-center w-80">
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={500}
                        height={500}
                    />
                </Link>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-700">
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div className="text-center text-lg text-gray-400 font-medium mb-4">
                ${price}
            </div>
            <div>
                <CartButton item={item} />
            </div>
        </div>
    );
}
