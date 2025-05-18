import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Product } from "../model/Product";
import { useContext, useState } from 'react';
import { InventoryContext } from '../context/inventory-context';

export function ProductsTable() {
    const { products } = useContext(InventoryContext);

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 390 }}>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell colSpan={2}>ID Categoria</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => <Row key={product.id} product={product} />)}
                    <AddRow />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Row({ product }: { product: Product }) {
    const { categories } = useContext(InventoryContext);
    const [editMode, setEditMode] = useState(false);

    return (
        <TableRow>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.name}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.description}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.price}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.stock}
                    disabled={!editMode}
                />
            </TableCell>
            <TableCell>
                {
                    editMode ?
                        <Select>
                            {categories.map((category) => <MenuItem value={category.id}>{category.id}</MenuItem>)}
                        </Select> :
                        <TextField
                            variant='standard'
                            value={product.categoryId}
                            disabled={!editMode}
                        />
                }
            </TableCell>
            <TableCell>
                <IconButton onClick={() => setEditMode(!editMode)}>
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

function AddRow() {
    const { categories, product, products, handleChangeProduct, createProduct } = useContext(InventoryContext);

    const handleClick = async () => {
        products.push(product);
        await createProduct();
    }

    return (
        <TableRow>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.name || ''}
                    onChange={(e) => handleChangeProduct("name", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.description || ''}
                    onChange={(e) => handleChangeProduct("description", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.price || ''}
                    onChange={(e) => handleChangeProduct("price", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={product.stock || ''}
                    onChange={(e) => handleChangeProduct("stock", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Select
                    value={product.categoryId}
                    onChange={(e) => handleChangeProduct("categoryId", e.target.value as number)}>
                    {categories.map((category) => <MenuItem value={category.id}>{category.id}</MenuItem>)}
                </Select>
            </TableCell>
            <TableCell >
                <Button startIcon={<AddCircleIcon />} onClick={handleClick} >Agregar</Button>
            </TableCell>
        </TableRow>
    );
}