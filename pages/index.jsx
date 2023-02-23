import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";

export default function Home() {
    return (
        <>
            <Layout title="Home">
                <h1 className="text-3xl my-6">Este es el home</h1>
            </Layout>
        </>
    );
}
