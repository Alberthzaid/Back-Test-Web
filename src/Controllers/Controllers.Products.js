// controllers/Product.Controller.js
import { deleteProductFunction , updateProductFunction , getProductsByIdFunction , getProductsFunction , createProductFunction } from "../Repository/Product.Repo.js";

export const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        const product = await createProductFunction(productData);
        res.status(201).json({ message: 'Product added successfully', data: product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await getProductsFunction();
        res.status(200).json({ data: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const getProductById = async (req , res)=>{
    try {
        const {id} = req.params;
        const product = await getProductsByIdFunction(id)
        res.status(200).json({data : product})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await updateProductFunction(id, productData);
        res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductFunction(id);
        res.status(200).json({ message: 'Product deleted successfully', data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
