import { Types } from "mongoose";

export interface IOrder {
    name: string;
    email: string;
    phone: string;
    address: string;
    totalPrice: number;
    products: Types.ObjectId[];
}