import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderService } from './order.service';

// Create a new Order

const createOrder = catchAsync(async (req, res) => {
    const result = await OrderService.createOrder(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order added successfully',
        data: result,
    });
});

// Update an existing Order

const updateOrder = catchAsync(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    
    const result = await OrderService.updateOrder(id, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order updated successfully',
        data: result,
    });
});

// delete an existing Order

const deleteOrder = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await OrderService.deleteOrder(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order deleted successfully',
        data: result,
    });
});

// Retrieve all Orders

const getAllOrders = catchAsync(async (req, res) => {
    const result = await OrderService.getAllOrders();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});

// Retrieve single Order

const getSingleOrder = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await OrderService.getSingleOrder(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
    });
});

export const OrderController = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getSingleOrder
};
