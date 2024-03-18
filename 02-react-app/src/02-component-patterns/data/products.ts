import { ProductCardProps } from "../interfaces/interfaces";

const product = {
    id: "1",
    image: "./coffee-mug.png",
    title: "Coffee Mug",
};

const product2 = {
    id: "2",
    image: "./coffee-mug2.png",
    title: "Coffee Mug - Meme",
};

export const products: ProductCardProps[] = [product, product2];
