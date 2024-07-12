export interface IProduct {
    name: string;
    image: string;
    description: string;
    price: number;
    rating?: number,
    stock: number;
    category: string;
    brand: string;
    isFeatured: boolean
}