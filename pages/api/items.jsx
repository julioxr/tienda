export function getTestItems() {
    return [
        {
            id: 1,
            title: "Blue microphone",
            price: 3200,
            image: "http://localhost:3000/img/1.jpg",
            descripcion:
                "Professional microphone with high sensitivity and sound quality for recording and live streaming.",
        },
        {
            id: 2,
            title: "Sony Headphones",
            price: 12350,
            image: "http://localhost:3000/img/2.jpg",
            descripcion:
                "Sony headphones with noise-canceling technology and exceptional sound quality for an immersive audio experience.",
        },
        {
            id: 3,
            title: "Canon lens",
            price: 18120,
            image: "http://localhost:3000/img/3.jpg",
            descripcion:
                "Canon camera lens with fast autofocus and sharp, detailed image quality for professional photography.",
        },
        {
            id: 4,
            title: "Watch Casio",
            price: 47950,
            image: "http://localhost:3000/img/4.jpg",
            descripcion:
                "Casio watch with stylish design and features such as stopwatch, alarm, and water resistance for daily and sports use.",
        },
        {
            id: 5,
            title: "Xiaomi red dot",
            price: 2530,
            image: "http://localhost:3000/img/5.jpg",
            descripcion:
                "Xiaomi wireless earbuds with stable Bluetooth connection, intuitive touch control, and high-fidelity sound for enjoying music anywhere.",
        },
        {
            id: 6,
            title: "Wallet",
            price: 2500,
            image: "http://localhost:3000/img/6.jpg",
            descripcion:
                "Leather wallet with multiple compartments for cards and bills, stylish design, and durability for daily use.",
        },
        {
            id: 7,
            title: "Ligther",
            price: 2500,
            image: "http://localhost:3000/img/7.jpg",
            descripcion:
                "High-quality rechargeable lighter with stylish design, adjustable flame, and reliability for long-lasting use.",
        },
        {
            id: 8,
            title: "Notebook",
            price: 2500,
            image: "http://localhost:3000/img/8.jpg",
            descripcion:
                "Notebook with high-quality paper, durable cover, and convenient size for daily use and creative inspiration.",
        },
        {
            id: 9,
            title: "Luxury cup",
            price: 2500,
            image: "http://localhost:3000/img/9.jpg",
            descripcion:
                "High-quality ceramic mug with ergonomic handle and vibrant design for a cozy and stylish drinking experience.",
        },
        {
            id: 10,
            title: "Red drone",
            price: 2500,
            image: "http://localhost:3000/img/10.jpg",
            descripcion:
                "Red drone with advanced camera technology, long battery life, and stable flight control for capturing stunning aerial footage.",
        },
        {
            id: 11,
            title: "Picks Rombo",
            price: 2500,
            image: "http://localhost:3000/img/11.jpg",
            descripcion:
                "Guitar picks with premium materials and various thicknesses for optimal tone and precision during playing sessions.",
        },
        {
            id: 12,
            title: "Canon Mark iii",
            price: 2500,
            image: "http://localhost:3000/img/12.jpg",
            descripcion:
                "Canon Mark III camera with full-frame sensor, advanced autofocus system, and high-speed continuous shooting for professional-grade photography.",
        },
    ];
}

export default function handler(req, res) {
    res.status(200).json(getTestItems());
}
