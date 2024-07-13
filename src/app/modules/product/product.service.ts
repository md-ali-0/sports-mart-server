import QueryBuilder from '../../builder/QueryBuilder';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (
    payload: IProduct,
    image: string,
): Promise<IProduct | null> => {
    payload.image = image;
    const result = await Product.create(payload);
    return result;
};

const updateProduct = async (
    id: string,
    payload: Partial<IProduct>,
): Promise<IProduct | null> => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
    const result = await Product.findByIdAndDelete(id);
    return result;
};

const getSingleProduct = async (id: string)=>{
    const result = await Product.findById(id);
    return result;
}

const getAllProducts = async (
    query: Record<string, unknown>,
): Promise<IProduct[] | null> => {
    const productQuery = new QueryBuilder(Product.find(), query)
        .search(['name', 'brand', 'category', 'rating'])
        .filter()
        .sort()
        .fields()
        .paginate()
        .limit();

    const result = await productQuery.modelQuery;
    return result;
};

export const ProductService = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct
};
