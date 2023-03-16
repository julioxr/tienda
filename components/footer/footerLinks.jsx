import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function FooterLinks() {
    return (
        <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="mb-1 text-xl font-bold">Follow us</h4>
            <div className="flex gap-3 text-xl sm:gap-6">
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
    );
}
