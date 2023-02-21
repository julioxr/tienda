import Link from "next/link";

export default function Product({ item, showAs }) {
    if (showAs === "Page") {
        return <div>Page producto</div>;
    }

    if (showAs === " ListItem") {
        return <div>List Item producto</div>;
    }

    return (
        <div>
            <div>
                <Link href={`/store/url-a-mi-componente`}>asd</Link>
            </div>
        </div>
    );
}
