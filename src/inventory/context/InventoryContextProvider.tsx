import { ReactNode } from "react";
import { useGetCategories } from "../hooks/useGetCategories";
import { InventoryContext, InventoryContextType } from "./inventory-context";
import { useGetProducts } from "../hooks/useGetProducts";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { useCreateProduct } from "../hooks/useCreateProduct";

export function InventoryContextProvider({ children }: { children: ReactNode }) {
    const InventoryContextValue: InventoryContextType = {
        ...useGetCategories(),
        ...useGetProducts(),
        ...useCreateCategory(),
        ...useCreateProduct()
    }

    return (
        <InventoryContext.Provider value={InventoryContextValue}>
            {children}
        </InventoryContext.Provider>
    );
};