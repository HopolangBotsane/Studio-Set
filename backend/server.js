import express from "express";
import productsRoutes from "./productsRoutes/productsRoutes.jsx";

const app = express();

app.use("/products", productsRoutes)

app.listen(5001, () => {
    console.log("App is waiting")
});