import { Layout } from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "@/components/stateWrapper";

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
                <section className="flex min-h-[calc(100vh-340px)] flex-col items-center justify-center gap-6 sm:min-h-[calc(100vh-280px)]">
                    <h1 className="text-2xl md:text-3xl">
                        Gracias por la compra{" "}
                        <span className="text-blue-500">{data.firstName}</span>{" "}
                        !
                    </h1>
                    <p>Su orden es la nro {Date.now()}</p>
                </section>
            </Layout>
        </>
    );
}
