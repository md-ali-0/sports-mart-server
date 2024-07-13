import QueryBuilder from '../../builder/QueryBuilder';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (
    payload: IOrder,
): Promise<IOrder | null> => {
    const result = await Order.create(payload);
    return result;
};

const updateOrder = async (
    id: string,
    payload: Partial<IOrder>,
): Promise<IOrder | null> => {
    const result = await Order.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteOrder = async (id: string): Promise<IOrder | null> => {
    const result = await Order.findByIdAndDelete(id);
    return result;
};

const getSingleOrder = async (id: string)=>{
    const result = await Order.findById(id);
    return result;
}

const getAllOrders = async (
    query: Record<string, unknown>,
): Promise<IOrder[] | null> => {
    const orderQuery = new QueryBuilder(Order.find(), query)
        .search(['name', 'brand', 'category', 'rating'])
        .filter()
        .sort()
        .fields()
        .paginate()
        .limit();

    const result = await orderQuery.modelQuery;
    return result;
};

export const OrderService = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getSingleOrder
};
