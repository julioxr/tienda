import { Layout } from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "@/components/stateWrapper";
import Image from "next/image";
import carrito from "@/public/carrito.svg";

export default function Success() {
    const { clearCart, access } = useAppContext();
    const router = useRouter();
    const data = router.query;

    const goHome = () => {
        router.push("/");
    };

    useEffect(() => {
        if (access === false) {
            router.push("/");
        } else {
            clearCart();
        }
    }, []);

    return (
        <>
            {access && (
                <Layout>
                    <section className="flex min-h-[calc(100vh-340px)] flex-col items-center justify-center sm:min-h-[calc(100vh-280px)]">
                        <Image
                            src={carrito}
                            width={300}
                            height={300}
                            alt="imagen de un carrito de compras"
                        />
                        <h1 className="mb-4 mt-6 text-2xl md:text-3xl">
                            Gracias por la compra{" "}
                            <span className="font-bold text-blue-500">
                                {data.firstName}
                            </span>
                            !
                        </h1>
                        <p className="mb-6">
                            Su orden es la nro{" "}
                            <span className="font-bold">{Date.now()}</span>
                        </p>
                        <button
                            className="mb-8 h-12 w-40 rounded-full border bg-gray-800 text-white"
                            onClick={goHome}
                        >
                            Go to main page
                        </button>
                    </section>
                </Layout>
            )}
        </>
    );
}
