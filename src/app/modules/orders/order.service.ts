import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder | null> => {
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

const getSingleOrder = async (id: string) => {
    const result = await Order.findById(id);
    return result;
};

const getAllOrders = async () => {
    const result = await Order.find();
    return result;
};

export const OrderService = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getSingleOrder,
};
