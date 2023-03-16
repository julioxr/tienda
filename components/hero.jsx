import CartButton from "./cartButton";

export default function Hero() {
    return (
        <div className="mt-10 h-[500px] bg-[url('/img/hero.jpg');] bg-cover bg-center">
            <div className="h-[500px] backdrop-brightness-50">
                <div className="w-10/12 px-8 py-16 text-white lg:w-1/2">
                    <h2 className=" mb-6 text-5xl font-bold sm:text-6xl">
                        Discover the Latest Tech Collection
                    </h2>
                    <p className="lg:w-2/3">
                        Upgrade your digital lifestyle today with our latest
                        collection of cutting-edge tech devices designed to keep
                        you connected on-the-go.
                    </p>
                </div>
            </div>
        </div>
    );
}
