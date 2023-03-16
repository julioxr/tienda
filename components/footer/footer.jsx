import FooterInfo from "./footerInfo";
import FooterLinks from "./footerLinks";

export default function Footer() {
    return (
        <>
            <section className="flex flex-col items-start justify-center gap-8 bg-gray-800 py-10 px-8 text-white sm:items-center sm:px-2">
                <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-60">
                    <FooterInfo />
                    <FooterLinks />
                </div>
                <div className="text-center text-sm font-light">
                    <p>© 2021 Tienda. All rights reserved.</p>
                    {/* <p>
                        Términos y condiciones. Políticas de privacidad.
                        Política de calidad.
                    </p> */}
                </div>
            </section>
        </>
    );
}
