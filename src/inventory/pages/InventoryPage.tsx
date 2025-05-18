import { CategoriesTable } from "../components/CategoriesTable";
import { InventorySummary } from "../components/InventorySummary";
import { ProductsTable } from "../components/ProductsTable";
import { InventoryContextProvider } from "../context/InventoryContextProvider";

export function InventoryPage() {
    return (
        <InventoryContextProvider>
            <div className="flex flex-col gap-15">
                <InventorySummary />
                <div className="flex justify-evenly items-center">
                    <div className="w-1/3">
                        <CategoriesTable />
                    </div>
                    <div className="w-1/3">
                        <ProductsTable />
                    </div>
                </div>
            </div>
        </InventoryContextProvider>
    );
}