import { createBrandFunction , deleteBrandFunction , updateBrandFunction , getBrandByIdFunction , getBrandFunction } from "../Repository/Brands.Repo.js";



export const createBrand = async (req, res) => {
    try {
        const brandData = req.body;
        const data = await createBrandFunction(brandData);

        res.status(201).json({ message: 'Brand created successfully', data });
    } catch (error) {
        console.error('Error creating brand:', error.message);
        res.status(500).json({ message: 'Error creating brand', details: error.message });
    }
};

export const getBrands = async (req, res) => {
    try {
        const brands = await getBrandFunction();
        res.status(200).json({ data: brands });
    } catch (error) {
        console.error('Error retrieving brands:', error.message);
        res.status(500).json({ message: 'Error retrieving brands', details: error.message });
    }
};

export const getBrandById = async (req, res) => {
    try {
        const { id } = req.params;
        const brand = await getBrandByIdFunction(id);
        res.status(200).json({ data: brand });
    } catch (error) {
        console.error('Error retrieving brand by ID:', error.message);
        res.status(500).json({ message: 'Error retrieving brand by ID', details: error.message });
    }
};

export const updateBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const brandData = req.body;
        const data = await updateBrandFunction(id, brandData);

        res.status(200).json({ message: 'Brand updated successfully', data });
    } catch (error) {
        console.error('Error updating brand:', error.message);
        res.status(500).json({ message: 'Error updating brand', details: error.message });
    }
};

export const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteBrandFunction(id);

        res.status(200).json({ message: 'Brand deleted successfully', data });
    } catch (error) {
        console.error('Error deleting brand:', error.message);
        res.status(500).json({ message: 'Error deleting brand', details: error.message });
    }
};