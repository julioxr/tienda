import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { MdRemove, MdAdd } from "react-icons/md";
import { convertToPath } from "@/lib/utils";
import CartButton from "./cartButton";
import ErrorMessage from "./errorMessage";
import { useAppContext } from "./stateWrapper";
import Table from "./table";

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
            // <div className="h-[calc(100vh-328px)]">
            <div className="h-full">
                <h1 className="text-base font-bold my-6">
                    STORE{" "}
                    <span className="text-base font-thin">
                        / {`${item.title}`}
                    </span>
                </h1>
                <div className="flex gap-x-12 bg-white justify-center items-center mt-12 w-[1000px] mx-auto rounded-md shadow-xl">
                    <div className="p-4">
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={800}
                            height={800}
                            className="rounded-md"
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
                {/* Aca probar agregar minicards */}
                {/* <div className="flex gap-8 justify-center p-14 items-center">
                    <div className="w-40 h-40 flex justify-center items-center m-2">
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={600}
                            height={600}
                            className="rounded-md"
                        />
                    </div>
                    <div className="w-40 h-40 flex justify-center items-center">
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={600}
                            height={600}
                            className="rounded-md"
                        />
                    </div>
                    <div className="w-40 h-40 flex justify-center items-center">
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={600}
                            height={600}
                            className="rounded-md"
                        />
                    </div>
                    <div className="w-40 h-40 flex justify-center items-center">
                        <Image
                            src={item.image}
                            alt={item.descripcion}
                            width={600}
                            height={600}
                            className="rounded-md"
                        />
                    </div>
                </div> */}
                {/* Aca va la tabla*/}
                <Table />
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
                                    cart.priceFormatter(item) * item.quantity // convierte el string en number para poder multiplicar y luego agrego 3 decimales
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
        <div className="bg-white rounded-md text-center shadow-xl p-4 gap-2 flex flex-col justify-around items-center w-80">
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                </Link>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-700 mt-2">
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div className="text-center text-lg text-gray-400 font-medium -mt-1 mb-4">
                ${price}
            </div>
            <div className="mb-3">
                <CartButton item={item} />
            </div>
        </div>
    );
}
