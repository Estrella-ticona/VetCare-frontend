import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Category } from "../model/Category";
import { useContext, useState } from 'react';
import { InventoryContext } from '../context/inventory-context';

export function CategoriesTable() {
    const { categories } = useContext(InventoryContext);

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 390 }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Cantidad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category) => <Row key={category.id} category={category} />)}
                    <AddRow />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Row({ category }: { category: Category }) {
    const [editMode, setEditMode] = useState(false);
    return (
        <TableRow >
            <TableCell>
                <TextField
                    variant='standard'
                    value={category.name}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={category.description}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>{category.stock}</TableCell>
            <TableCell>
                <IconButton onClick={() => setEditMode(!editMode)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

function AddRow() {
    const { categories, category, handleChangeCategory, createCategory } = useContext(InventoryContext);

    const handleClick = async () => {
        category.id = Number(categories.at(categories.length - 1)?.id) + 1;
        categories.push(category);
        await createCategory();
    }

    return (
        <TableRow>
            <TableCell>
                <TextField
                    variant='standard'
                    value={category.name || ''}
                    onChange={(e) => handleChangeCategory("name", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={category.description || ''}
                    onChange={(e) => handleChangeCategory("description", e.target.value)}
                />
            </TableCell>
            <TableCell colSpan={2} >
                <Button startIcon={<AddCircleIcon />} onClick={handleClick}>Agregar</Button>
            </TableCell>
        </TableRow>
    );
}