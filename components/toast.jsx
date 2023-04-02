export default function Toast({ showToast }) {
    const toastAnimation = showToast
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0";

    return (
        <div
            className={`pointer-events-none absolute bottom-0 flex h-7  w-full items-center justify-center bg-green-500 text-white transition duration-500 ease-in-out ${toastAnimation}`}
        >
            <p>Item added to cart</p>
        </div>
    );
}
