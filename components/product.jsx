import Link from "next/link";
import Image from "next/image";
import { convertToPath } from "@/lib/utils";
import CartButton from "./cartButton";

export default function Product({ item, showAs, quantity }) {
    if (showAs === "Page") {
        const { title, price, image, descripcion } = item.data;
        return (
            <div className="h-[calc(100vh-184px)]">
                <div className="flex bg-white justify-center items-center mt-12 max-w-4xl mx-auto">
                    <div>
                        <Image
                            src={image}
                            alt={descripcion}
                            width={600}
                            height={600}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-3xl font-bold">{title}</h2>
                        </div>
                        <div>{price}</div>
                        <div>{descripcion}</div>
                        <div>
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
                <div className="flex gap-4 items-center p-4">
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={60}
                        height={60}
                    />
                    <div>
                        <div>{item.title}</div>
                        <div>Cantidad {quantity}</div>
                        <p>Precio: ${item.price * quantity}</p>
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
