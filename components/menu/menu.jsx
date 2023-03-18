import { IoMdMenu } from "react-icons/io";
import MenuLinks from "./menuLinks";
import MenuLogo from "./menuLogo";
import { useAppContext } from "@/components/stateWrapper";

export default function Menu() {
    const { isMenuOpen, handleOpenMenu, handleCloseMenu } = useAppContext();
    let position = isMenuOpen
        ? "fixed flex top-0 left-0 w-2/3 bottom-0 flex-col gap-4 px-10 py-24 font-bold bg-[#efefef] shadow-2xl text-2xl overflow-hidden"
        : "hidden sm:static sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0";

    return (
        <>
            {/* Este div es para ocupar el espacio del header y dar shadow */}
            <div className="fixed -z-10 h-20 w-full shadow-sm"></div>
            <nav className="container mx-auto h-20">
                <div className="container fixed z-10 mx-auto flex h-20 items-center justify-between gap-4 bg-[#efefef] p-8 sm:p-0 sm:px-2">
                    {/* Este div sirve para dar sobra detras del menu link*/}
                    {isMenuOpen && (
                        <div
                            className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-25 sm:hidden"
                            onClick={handleCloseMenu}
                        ></div>
                    )}
                    <MenuLogo />
                    {/* Burger menu */}
                    <IoMdMenu
                        className="pointer-events-auto order-1 cursor-pointer text-3xl sm:hidden"
                        onClick={handleOpenMenu}
                    />
                    <MenuLinks position={position} />
                </div>
            </nav>
        </>
    );
}
