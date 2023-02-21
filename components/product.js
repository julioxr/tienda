import Link from "next/link";
import Image from "next/image";

export default function Product({ item, showAs }) {
    if (showAs === "Page") {
        return <div>Page producto</div>;
    }

    if (showAs === " ListItem") {
        return <div>List Item producto</div>;
    }

    return (
        <div
            className="bg-white rounded-md text-center shadow-sm p-4 flex flex-col justify-around items-center w-80"
            key={item.id}
        >
            <div>
                <Link href={`/store/url-a-mi-componente`}>
                    <Image
                        src={item.image}
                        alt={item.descripcion}
                        width={500}
                        height={500}
                    />
                </Link>
            </div>
            <div>
                <h3 className="text-xl mb-3">
                    <Link href={`/store/url-a-mi-componente`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div className="text-sm text-center pb-4">${item.price}</div>
            <div>
                <button className="bg-slate-500 rounded-full w-28 text-white h-8 ">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
