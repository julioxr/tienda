import carrito from "@/public/carrito.svg";
import Image from "next/image";
export default function CartEmpty() {
    return (
        <div className="flex h-[calc(100vh-150px)] w-full flex-col items-center justify-center gap-12">
            <Image src={carrito} alt="Carrito" width={300} height={300} />
            <p className="-mt-6 text-xl font-bold text-gray-700">
                Cart is empty
            </p>
        </div>
    );
}
