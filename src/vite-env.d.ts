/// <reference types="vite/client" />
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: {
        id: number,
        name: string,
        image: string,
    };
    images: Array<string>;
    count: number
}