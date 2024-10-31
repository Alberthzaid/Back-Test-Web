import { Router } from "express";
import { createBrand , deleteBrand , updateBrand , getBrands , getBrandById} from "../Controllers/Controllers.Brands.js";

const brandsRoute = Router();


brandsRoute.get('/api/get/brands', getBrands);

brandsRoute.get('/api/get/brand/:id', getBrandById);

brandsRoute.post('/api/add/brand', createBrand);

brandsRoute.put('/api/update/brand/:id', updateBrand);

brandsRoute.delete('/api/delete/brand/:id', deleteBrand);

export default brandsRoute;

