import Link from "next/link";

export default function CartFooter({ getTotal, handleCloseCart }) {
    // bg-[#efefef]
    return (
        <div className="absolute bottom-2 w-full">
            <div className="mt-12 mb-6 border-b-2 border-gray-300 opacity-70"></div>
            <div className="">
                <div className="mb-6 text-right text-2xl font-bold">
                    Total: ${getTotal()}
                </div>
                <div className="flex justify-between gap-8">
                    <Link href={"/store"}>
                        <button
                            className="rounded-full border border-slate-800 px-6 py-2 sm:px-6"
                            onClick={handleCloseCart}
                        >
                            Add more products
                        </button>
                    </Link>

                    <Link href={"/checkout"}>
                        <button
                            className="rounded-full bg-slate-800 px-6 py-2 text-white sm:px-6"
                            onClick={handleCloseCart}
                        >
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
