import { createContext } from "react";
import { useGetCategories } from "../hooks/useGetCategories";
import { useGetProducts } from "../hooks/useGetProducts";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { useCreateProduct } from "../hooks/useCreateProduct";

export type InventoryContextType =
    ReturnType<typeof useGetCategories>
    & ReturnType<typeof useGetProducts>
    & ReturnType<typeof useCreateCategory>
    & ReturnType<typeof useCreateProduct>;

export const InventoryContext = createContext<InventoryContextType>({} as InventoryContextType);