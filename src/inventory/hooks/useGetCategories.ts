import { useEffect, useState } from "react";
import { Category } from "../model/Category";

export function useGetCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    async function getCategories() {
        //TODO: api call
        const categories: Category[] = [
            { id: 1, name: 'Category 1', description: 'Description 1', stock: 10 },
            { id: 2, name: 'Category 2', description: 'Description 2', stock: 20 },
            { id: 3, name: 'Category 3', description: 'Description 3', stock: 30 },
        ]

        setCategories(categories);
    }

    useEffect(() => {
        getCategories().then();
    }, []);

    return { categories, setCategories, getCategories };
}