import Link from "next/link";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";
import { convertToPath } from "@/lib/utils";
import CartButton from "./cartButton";
import { useAppContext } from "./stateWrapper";

export default function Product({ item, showAs }) {
    const cart = useAppContext();
    const handleQuantity = (e, item) => {
        const copy = [...cart.items];
        e.textContent === "-" ? item.quantity-- : item.quantity++;
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
                            ${item.price}
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
                        <div className="font-medium text-gray-700">
                            {item.title}
                        </div>
                        <div>Cantidad: {item.quantity}</div>
                        <div className="flex gap-2 font-bold text-3xl text-gray-700">
                            <button
                                className="w-8"
                                onClick={(e) => handleQuantity(e.target, item)}
                            >
                                -
                            </button>
                            <button
                                className="w-8"
                                onClick={(e) => handleQuantity(e.target, item)}
                            >
                                +
                            </button>
                        </div>
                        <p className="text-right ">
                            Precio:{" "}
                            <span className="font-semibold">
                                ${item.price * item.quantity}
                            </span>
                        </p>
                        <div className="absolute top-4 right-3 text-lg text-gray-700 cursor-pointer">
                            {/* FUNCION PARA ELIMINAR DE LA LISTA */}
                            <BsTrash3
                                onClick={() => cart.filterItems(item.id)}
                            />
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
                ${item.price}
            </div>
            <div>
                <CartButton item={item} />
            </div>
        </div>
    );
}
