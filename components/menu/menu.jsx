import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MenuLinks from "./menuLinks";
import MenuLogo from "./menuLogo";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    let position = isOpen
        ? "fixed flex top-0 left-0 right-1/2 bottom-0 flex-col gap-3 bg-gray-300 px-8 py-20 font-semibold"
        : "hidden sm:static sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0";

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="fixed -z-10 h-20 w-full shadow-sm"></div>
            <nav className="container mx-auto h-20">
                <div className="container fixed z-10 mx-auto flex h-20 items-center justify-between gap-4 bg-[#efefef] p-8 sm:p-0 sm:px-2">
                    <MenuLogo />
                    <IoMdMenu
                        className="pointer-events-auto z-50 order-1 cursor-pointer text-3xl sm:hidden"
                        onClick={handleMenu}
                    />
                    <MenuLinks position={position} setIsOpen={setIsOpen} />
                </div>
            </nav>
        </>
    );
}
