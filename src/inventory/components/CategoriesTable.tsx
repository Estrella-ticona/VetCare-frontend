import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Category } from "../model/Category";

export function CategoriesTable() {
    const categories: Category[] = [
        { id: 1, name: 'Category 1', description: 'Description 1', stock: 10 },
        { id: 2, name: 'Category 2', description: 'Description 2', stock: 20 },
        { id: 3, name: 'Category 3', description: 'Description 3', stock: 30 },
    ]

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Cantidad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category) => <Row key={category.id} category={category} />)}
                    <TableRow>
                        <TableCell colSpan={3} align="right">
                            <Button startIcon={<AddCircleIcon />}>Agregar</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Row({ category }: { category: Category }) {
    return (
        <TableRow>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell>{category.stock}</TableCell>
        </TableRow>
    );
}