// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            title: "Zapatos deportivos",
            price: 100,
            image: "http://localhost:3000/img/image-1.webp",
            descripcion:
                "Estos zapatos deportivos son cómodos y perfectos para entrenar.",
        },
        {
            id: 2,
            title: "Camiseta de algodón",
            price: 20,
            image: "http://localhost:3000/img/image-2.webp",
            descripcion:
                "Esta camiseta de algodón es suave y cómoda, perfecta para el día a día.",
        },
        {
            id: 3,
            title: "Pantalones de mezclilla",
            price: 50,
            image: "http://localhost:3000/img/image-3.webp",
            descripcion:
                "Estos pantalones de mezclilla son duraderos y perfectos para cualquier ocasión.",
        },
        {
            id: 4,
            title: "Reloj de cuarzo",
            price: 80,
            image: "http://localhost:3000/img/image-4.webp",
            descripcion:
                "Este reloj de cuarzo es elegante y funcional, perfecto para cualquier ocasión.",
        },
        {
            id: 5,
            title: "Bolso de cuero",
            price: 120,
            image: "http://localhost:3000/img/image-5.webp",
            descripcion:
                "Este bolso de cuero es espacioso y elegante, perfecto para llevar todo lo que necesites.",
        },
    ]);
}