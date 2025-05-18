import { useEffect, useState } from "react";
import { Product } from "../model/Product";

export function useGetProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    async function getCategories() {
        //TODO: api call
        const products: Product[] = [
            { id: 1, name: "Product 1", description: "Description 1", price: 100, stock: 10, categoryId: 1 },
            { id: 2, name: "Product 2", description: "Description 2", price: 200, stock: 20, categoryId: 2 },
            { id: 3, name: "Product 3", description: "Description 3", price: 300, stock: 30, categoryId: 1 },
        ]

        setProducts(products);
    }

    useEffect(() => {
        getCategories().then();
    }, []);

    return { products, setProducts, getCategories };
}