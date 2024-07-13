import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: true,
    },
},{
    versionKey: false,
    timestamps: true
})

export const Order = model('order', orderSchema)