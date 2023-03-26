import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { MdRemove, MdAdd } from "react-icons/md";
import { convertToPath } from "@/lib/utils";
import CartButton from "@/components/cartButton";
import ErrorMessage from "@/components/errorMessage";
import { useAppContext } from "@/components/stateWrapper";
import Table from "./table";

export default function Product({ item, showAs }) {
    const cart = useAppContext();
    const [error, setError] = useState(false);
    const disabled =
        item.quantity == 1 ? "text-gray-300 pointer-events-none" : "";

    const price = cart.priceFormatter(item);

    const handleQuantity = (e, item) => {
        const copy = [...cart.items];

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
            <>
                {/* Breadcrumb */}
                <h1 className="my-6 px-8 text-base font-bold sm:px-0">
                    STORE{" "}
                    <span className="text-base font-thin">
                        / {`${item.title}`}
                    </span>
                </h1>
                {/* // hidden oculta el minimo scroll en x */}
                <div className="flex flex-col items-center justify-center overflow-x-hidden">
                    {" "}
                    {/* Card and description */}
                    <div className="mx-8 flex max-w-[500px] flex-col items-center justify-center gap-x-12 rounded-md bg-white shadow-xl sm:mx-auto md:w-[752px] md:max-w-none md:flex-row lg:w-[1000px]">
                        <div className="p-4">
                            <Image
                                src={item.image}
                                alt={item.descripcion}
                                width={800}
                                height={800}
                                className="w-[500px] rounded-md md:w-[800px]"
                            />
                        </div>

                        <div className="flex flex-col gap-4 p-4 lg:p-0">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-700">
                                    {item.title}
                                </h2>
                            </div>
                            <div className="-mt-3 text-lg font-semibold text-gray-400">
                                ${price}
                            </div>
                            <div className="w-full text-gray-500 lg:w-3/4">
                                {item.descripcion}
                            </div>
                            <div className="mt-4 mb-2 self-center md:self-start lg:mb-0 lg:mt-8">
                                <CartButton item={item} />
                            </div>
                        </div>

                        {/* Table with data */}
                    </div>
                    <Table item={item} />
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
                </div>
            </>
        );
    }

    if (showAs === "ListItem") {
        return (
            <>
                <div className="relative flex items-center gap-4 rounded-md bg-white p-4 text-gray-500">
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={70}
                        height={70}
                    />
                    <div className="w-full">
                        <div className="text-lg font-medium text-gray-700">
                            {item.title}
                        </div>
                        <div className="pb-1">Cantidad:</div>
                        <div className="flex gap-2 text-xl text-gray-600">
                            <button
                                id="remove"
                                className={`flex items-center justify-start rounded bg-gray-100 ${disabled}`}
                                onClick={(e) => handleQuantity(e.target, item)}
                            >
                                <MdRemove />
                            </button>
                            <span className="flex items-center justify-center text-base font-medium">
                                {item.quantity}
                            </span>
                            <button
                                id="add"
                                className="flex items-center justify-center rounded bg-gray-100"
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
                            className="absolute top-4 right-3 cursor-pointer text-lg text-gray-700"
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

    if (showAs === "checkout") {
        return (
            <>
                <div className="relative flex w-full items-center gap-4 border-b-2 border-gray-500 p-4 text-gray-500">
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={70}
                        height={70}
                    />
                    <div className="w-full">
                        <div className="text-lg font-medium text-gray-700">
                            {item.title}
                        </div>
                        <div className="pb-1">Cantidad: {item.quantity}</div>

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
                            className="absolute top-4 right-3 cursor-pointer text-lg text-gray-700"
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

    if (showAs === "carrousel") {
        return (
            <div className="flex w-80 flex-col items-center justify-around gap-2 rounded-md bg-white p-4 text-center shadow-xl">
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
                    <h3 className="mt-2 text-xl font-semibold text-gray-700">
                        <Link href={`/store/${convertToPath(item.title)}`}>
                            {item.title}
                        </Link>
                    </h3>
                </div>
                <div className="-mt-1 mb-4 text-center text-lg font-medium text-gray-400">
                    ${price}
                </div>
                <div className="mb-3">
                    <CartButton item={item} />
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-80 flex-col items-center justify-around gap-2 rounded-md bg-white p-4 text-center shadow-xl">
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
                <h3 className="mt-2 text-xl font-semibold text-gray-700">
                    <Link href={`/store/${convertToPath(item.title)}`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div className="-mt-1 mb-4 text-center text-lg font-medium text-gray-400">
                ${price}
            </div>
            <div className="mb-3">
                <CartButton item={item} />
            </div>
        </div>
    );
}
