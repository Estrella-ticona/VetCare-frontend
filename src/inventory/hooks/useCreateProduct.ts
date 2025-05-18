import { useState } from "react";
import { Product } from "../model/Product";

export function useCreateProduct() {
    const [product, setProduct] = useState<Product>(new Product());

    const handleChangeProduct = (name: keyof Product, value: string | number) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const clearProduct = () => {
        setProduct(new Product());
    }

    const createProduct = async () => {
        //TODO: api call
        alert("Category created!");
        clearProduct();
    }

    return { product, setProduct, createProduct, clearProduct, handleChangeProduct };
}