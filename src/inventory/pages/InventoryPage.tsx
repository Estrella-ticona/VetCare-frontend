import { CategoriesTable } from "../components/CategoriesTable";
import { ProductsTable } from "../components/ProductsTable";

export function InventoryPage() {
    return (
        <div className="flex justify-evenly">
            <div className="w-1/3">
                <CategoriesTable />
            </div>
            <div className="w-1/3">
                <ProductsTable />
            </div>
        </div>
    );
}