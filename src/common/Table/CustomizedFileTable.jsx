import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#7198F9',
        color: theme.palette.common.white,
        textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const rows = [
    { projectName: 'Project A', completionDate: '2024-05-16', status: 'FINISHED' },
    { projectName: 'Project B', completionDate: '2024-05-17', status: 'FINISHED' },
    { projectName: 'Project C', completionDate: '2024-05-18', status: 'FINISHED' },
    { projectName: 'Project D', completionDate: '2024-05-19', status: 'FINISHED' },
    { projectName: 'Project E', completionDate: '2024-05-20', status: 'FINISHED' },
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
}));

export default function CustomizedFileTable() {
    return (
        <StyledTableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Project Name</StyledTableCell>
                        <StyledTableCell align="center">Completion Date</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Export In Docs</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.projectName}>
                            <StyledTableCell component="th" scope="row">
                                {row.projectName}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.completionDate}</StyledTableCell>
                            <StyledTableCell align="center">
                                <span className='bg-green-500 text-white font-semibold text-xs px-4 py-1 rounded-lg'>
                                    {row.status}
                                </span>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <ArrowDownTrayIcon className="w-6 h-6" />
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
}
