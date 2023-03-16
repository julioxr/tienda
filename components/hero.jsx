export default function Hero() {
    return (
        <div className="mt-10 bg-cover bg-center h-[500px] bg-[url('/img/hero.jpg');]">
            <div className="h-[500px] backdrop-brightness-50">
                <div className="w-2/3 lg:w-1/2 p-12 text-white">
                    <h2 className="text-6xl font-bold mb-6">
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
