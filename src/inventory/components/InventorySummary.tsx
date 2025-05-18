import { Card, CardContent, CardHeader } from "@mui/material";
import { useContext } from "react";
import { InventoryContext } from "../context/inventory-context";

export function InventorySummary() {
    const { categories, products } = useContext(InventoryContext);

    return (
        <div className="flex justify-center gap-40">
            <Card>
                <CardHeader title="Categorias" />
                <CardContent className="text-center">{categories.length}</CardContent>
            </Card>
            <Card>
                <CardHeader title="Productos" />
                <CardContent className="text-center">{products.length}</CardContent>
            </Card>
            <Card>
                <CardHeader title="Stock total" />
                <CardContent className="text-center">{products.reduce((total, product) => total + Number(product.stock), 0)}</CardContent>
            </Card>
        </div>
    );
}