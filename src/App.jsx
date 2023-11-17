import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from "./Ecommerce/Store";
import { Route, Routes } from "react-router-dom";
import Categories from "./Ecommerce/Categories/Categories";
import Product from "./Ecommerce/Product/Product";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Store/>} />
            <Route path="products/categories/:id" element={<Categories />} />
            <Route path="products/:id" element={<Product/>} />
        </Routes>
    );
}
export default App;