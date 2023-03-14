import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <section className="bg-gray-800 text-white flex flex-col justify-center items-center py-10 gap-8">
                <div className="flex justify-center gap-60">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-xl">Attention</h4>
                        <div className="flex gap-6 text-base font-thin">
                            <Link href="/" className="">
                                Help
                            </Link>
                            <Link href="/" className="">
                                Community
                            </Link>
                            <Link href="/" className="">
                                Status
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-xl">Follow us</h4>
                        <div className="flex gap-4 text-xl">
                            <Link href="/" className="">
                                <BsInstagram />
                            </Link>
                            <Link href="/" className="">
                                <BsFacebook />
                            </Link>
                            <Link href="/" className="">
                                <BsTwitter />
                            </Link>
                            <Link href="/" className="">
                                <BsWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="font-light text-sm text-center">
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
