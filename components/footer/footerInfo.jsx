import Link from "next/link";

export default function FooterInfo() {
    return (
        <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="text-xl font-bold">Attention</h4>
            <div className="flex gap-3 text-base font-thin sm:gap-6">
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
    );
}
