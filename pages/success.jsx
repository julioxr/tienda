import { Layout } from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "@/components/stateWrapper";
import Image from "next/image";
import carrito from "@/public/carrito.svg";

export default function Success() {
    const { clearCart } = useAppContext();
    const router = useRouter();
    const data = router.query;

    useEffect(() => {
        clearCart();
    }, []);

    console.log(data);
    return (
        <>
            <Layout>
                <section className="flex min-h-[calc(100vh-340px)] flex-col items-center justify-center sm:min-h-[calc(100vh-280px)]">
                    <Image src={carrito} width={300} height={300} />
                    <h1 className="mb-2 mt-4 text-2xl md:text-3xl">
                        Gracias por la compra{" "}
                        <span className="font-bold text-blue-500">
                            {data.firstName}
                        </span>
                        !
                    </h1>
                    <p className="mb-4">
                        Su orden es la nro{" "}
                        <span className="font-bold">{Date.now()}</span>
                    </p>
                    <button className="h-12 w-40 rounded-full border bg-gray-800 text-white">
                        Go to main page
                    </button>
                </section>
            </Layout>
        </>
    );
}
