import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <section className="bg-gray-800 text-white">
                <div className="flex justify-center items-center h-14 gap-8">
                    <p className="">
                        © 2021 Tienda. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/" className="bg-transparent">
                            <BsInstagram />
                        </Link>
                        <Link href="/" className="bg-transparent">
                            <BsInstagram />
                        </Link>
                        <Link href="/" className="bg-transparent">
                            <BsInstagram />
                        </Link>
                        <Link href="/" className="bg-transparent">
                            <BsInstagram />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
