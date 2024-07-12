import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    brand: {
        type: String,
        required: true,
    }
},{
    versionKey: false,
    timestamps: true
});

export const Product = model<IProduct>('product', productSchema)