import { BsCreditCard, BsBoxSeam, BsShieldCheck } from "react-icons/bs";

export default function Info() {
    return (
        <section className="flex h-auto m-32 gap-20 justify-center">
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsCreditCard className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    Elegi como pagar
                </h3>
                <p className="text-gray-600 pt-2">
                    Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas
                    sin tarjeta con Mercado Crédito.
                </p>
            </div>
            <div className="border-l-gray-300 border"></div>
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsBoxSeam className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    Envío gratis desde $ 8.000
                </h3>
                <p className="text-gray-600 pt-2">
                    Solo por estar registrado en Mercado Libre tenés envíos
                    gratis en miles de productos. Es un beneficio de Mercado
                    Puntos.
                </p>
            </div>
            <div className="border-l-gray-300 border"></div>
            <div className="flex flex-col justify-center items-center max-w-xs text-center">
                <BsShieldCheck className="text-6xl mb-4 text-gray-700" />
                <h3 className="text-lg text-gray-800 font-medium">
                    Seguridad, de principio a fin
                </h3>
                <p className="text-gray-600 pt-2">
                    ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que
                    no puedas hacer, porque estás siempre protegido.
                </p>
            </div>
        </section>
    );
}
