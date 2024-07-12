import QueryBuilder from "../../builder/QueryBuilder";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
    const result = await Product.create(payload);
    return result;
};

const updateProduct = async (
    id: string,
    payload: IProduct,
): Promise<IProduct | null> => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
    const result = await Product.findByIdAndUpdate(
        id,
        { isAvailable: false },
        { new: true },
    );
    return result;
};

const getAllProducts = async (
    query: Record<string, unknown>,
): Promise<IProduct[] | null> => {

    const productQuery = new QueryBuilder(
        Product.find(),
        query,
    )
        .search(['name', 'brand','category'])
        .filter()
        .sort()
        .fields()
        .paginate();

    const result = await productQuery.modelQuery;
    return result;
};

export const ProductService = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
};
