import { useState } from "react";
import { Category } from "../model/Category";

export function useCreateCategory() {
    const [category, setCategory] = useState<Category>(new Category());

    const handleChangeCategory = (name: keyof Category, value: string) => {
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value,
        }));
    };

    const clearCategory = () => {
        setCategory(new Category());
    }

    const createCategory = async () => {
        //TODO: api call
        alert("Category created!");
        clearCategory();
    }

    return { category, setCategory, createCategory, clearCategory, handleChangeCategory };
}