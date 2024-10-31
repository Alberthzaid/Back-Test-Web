// repository/ProductFunctionsRepo.js
import { Supabase } from "../Config/Supabase.js";

export const createProductFunction = async (productData) => {
    const { nombre ,unidad_medida_id , observaciones , marca_id,cantidad_inventario , fecha_embarque, imagen } = productData;

    let { data, error } = await Supabase.rpc('crear_producto', {
        cantidad_inventario, 
        fecha_embarque, 
        marca_id, 
        nombre, 
        observaciones, 
        unidad_medida_id,
        imagen
  })
    if (error) console.error(error)
    else console.log(data)
    
    return data;
};

export const getProductsFunction = async () => {
    const { data, error } = await Supabase.rpc('obtener_productos');

    if (error) {
        console.error('Error calling get_all_products function:', error.message);
        throw new Error('Error calling get_all_products function');
    }
    
    return data;
};

export const getProductsByIdFunction = async (producto_id)=>{
    const {data , error} = await Supabase.from('producto').select('*').eq('id' , producto_id);

    if(error){
        console.error('Error calling get product function:', error.message);
        throw new Error('Error calling get products function');
    }

    return data
}


export const updateProductFunction = async (id, productData) => {
    const { product_name, stock_quantity, price, category, brand } = productData;

    const { data, error } = await Supabase.rpc('actualizar_producto', {
        id,
        product_name,
        stock_quantity,
        price,
        category,
        brand,
    });

    if (error) {
        console.error('Error calling update_product function:', error.message);
        throw new Error('Error calling update_product function');
    }

    return data;
};

export const deleteProductFunction = async (producto_id) => {
    let { data, error } = await Supabase.rpc('eliminar_producto', {producto_id});

    if (error) console.error(error)

    else console.log(data)

    if (error) {
        console.error("Error calling delete_product function:", error.message);
        throw new Error("Error calling delete_product function");
    }

  return data;
};
