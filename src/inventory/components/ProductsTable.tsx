import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Product } from "../model/Product";
import { useState } from 'react';

const categoriesId = [1, 2, 3];

export function ProductsTable() {
    const products: Product[] = [
        { id: 1, name: "Product 1", description: "Description 1", price: 100, stock: 10, categoryId: 1 },
        { id: 2, name: "Product 2", description: "Description 2", price: 200, stock: 20, categoryId: 2 },
        { id: 3, name: "Product 3", description: "Description 3", price: 300, stock: 30, categoryId: 1 },
    ]

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>ID Categoria</TableCell>
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
                            {categoriesId.map((id) => <MenuItem value={id}>{id}</MenuItem>)}
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
    return (
        <TableRow>
            <TableCell>
                <TextField
                    variant='standard'
                    value={"nombre"}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={"descripcion"}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={"precio"}
                />
            </TableCell>
            <TableCell>
                <TextField
                    variant='standard'
                    value={"0"}
                />
            </TableCell>
            <TableCell>
                <Select>
                    {categoriesId.map((id) => <MenuItem value={id}>{id}</MenuItem>)}
                </Select>
            </TableCell>
            <TableCell >
                <Button startIcon={<AddCircleIcon />}>Agregar</Button>
            </TableCell>
        </TableRow>
    );
}