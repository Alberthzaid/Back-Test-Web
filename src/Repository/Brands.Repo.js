import { Supabase } from "../Config/Supabase.js";
import { Brand } from "../Models/Brand.js";

const brandTable = Supabase.from('marca');

export const createBrandFunction = async (productData) => {
    const { nombre, referencia } = productData;
    const brand = new Brand(nombre, referencia);

    const { data, error } = await brandTable.insert(brand.toJson());

    if (error) {
        console.error('Error creating brand:', error.message);
        throw new Error('Error creating brand');
    }

    return data;
};

export const getBrandFunction = async () => {
    const { data, error } = await brandTable.select('*');
    if (error) {
        console.error('Error retrieving brands:', error.message);
        throw new Error('Error retrieving brands');
    }

    return data;
};

export const getBrandByIdFunction = async (id) => {
    const { data, error } = await brandTable.select('*').eq('id', id);
    if (error) {
        console.error('Error retrieving brand by ID:', error.message);
        throw new Error('Error retrieving brand by ID');
    }

    return data;
};

export const updateBrandFunction = async (id, productData) => {
    const { nombre, referencia } = productData;
    const brand = new Brand(nombre, referencia);

    const { data, error } = await brandTable.update(brand.toJson()).eq('id', id);

    if (error) {
        console.error('Error updating brand:', error.message);
        throw new Error('Error updating brand');
    }

    return data;
};

export const deleteBrandFunction = async (id) => {
    const { data, error } = await brandTable.delete().eq('id', id);

    if (error) {
        console.error("Error deleting brand:", error.message);
        throw new Error("Error deleting brand");
    }

    return data;
};