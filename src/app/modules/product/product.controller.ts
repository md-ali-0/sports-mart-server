import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';


// Create a new Product

const createProduct = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await ProductService.createProduct(payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product added successfully',
        data: result,
    });
});

// Update an existing Product

const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const result = await ProductService.updateProduct(id, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product updated successfully',
        data: result,
    });
});

// delete an existing Product

const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.deleteProduct(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product deleted successfully',
        data: result,
    });
});

// Retrieve all Products

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductService.getAllProducts(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Products retrieved successfully',
        data: result,
    });
});

export const ProductController = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
};
