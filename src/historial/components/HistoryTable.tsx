
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { History } from '../model/history';
import 'dayjs/locale/es-pr';
import { useContext, useState } from 'react';
import { HistoryContext } from '../context/historyContex';
import { Skeleton } from "@mui/material";

function Row({ history }: { history: History }) {
    return (
        <TableRow>

            <TableCell>{history.appoinments!![0].clientName}</TableCell>
            <TableCell>{history.appoinments?.at(0)?.petName}</TableCell>
            <TableCell>{history.appoinments!![0].petSpecie}</TableCell>
            <TableCell>{history.appoinments!![0].diagnostic}</TableCell>

        </TableRow>
    );
}


export function HistoryTable() {

    const { history, loadingHistory } = useContext(HistoryContext);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (


        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dueño</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Especie</TableCell>
                            <TableCell>Diagnostico</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loadingHistory ? (
                            Array.from(new Array(5)).map((_) => (
                                <TableRow>
                                    <TableCell colSpan={5} style={{ padding: "4px 0" }}>
                                        <Skeleton variant="rectangular" height={50} width="100%" />
                                    </TableCell>
                                </TableRow>)
                            )) : history.map((history) =>
                                <Row
                                    history={
                                        history
                                    }
                                />
                            )}


                    </TableBody>

                    {/* <TableBody>
                        {filteredHistory
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((history) => <Row key={appointment.id} appointment={history} />)
                        }
                    </TableBody> */}
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}

