import express, { json } from "express";
import productsRoute from "./Routes/Products.Route.js";
import cors from 'cors'
import authRoute from "./Routes/Auth.Route.js";
import brandsRoute from "./Routes/Brand.Route.js";


const app = express();

app.use(json())

app.use(cors())

app.use(brandsRoute)

app.use(productsRoute)

app.use(authRoute)

export default app;