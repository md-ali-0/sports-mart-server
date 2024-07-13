import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';

// Create a new Product

const createProduct = catchAsync(async (req, res) => {
    if (!req.files || !('image' in req.files)) {
        return res
            .status(httpStatus.BAD_REQUEST)
            .json({ message: 'Image files are required' });
    }
    const image = req.files?.['image']?.[0].path;

    const result = await ProductService.createProduct(req.body, image);

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

    if (req.files && ('image' in req.files)) {
        const image = req.files?.['image']?.[0].path;
        payload.image = image;
    }

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

// Retrieve single product

const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await ProductService.getSingleProduct(id);

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
    getSingleProduct
};
