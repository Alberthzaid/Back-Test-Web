import { Router } from "express";
import { addProduct, deleteProduct, getProducts, updateProducts, getProductById } from "../Controllers/Controllers.Products.js";

const productsRoute = Router();

productsRoute.get('/api/get/products' , getProducts);

productsRoute.post('/api/add/products' , addProduct);

productsRoute.get('/api/get/products/:id' , getProductById)

productsRoute.put('/api/update/products/:id' , updateProducts);

productsRoute.delete('/api/delete/products/:id' , deleteProduct)


export default productsRoute;