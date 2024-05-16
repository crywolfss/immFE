import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#7198F9',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    { projectName: 'Project A', date: '2024-05-16', categoryBusiness: 'Category A', tags: 'Tag1, Tag2', total: 500 },
    { projectName: 'Project B', date: '2024-05-17', categoryBusiness: 'Category B', tags: 'Tag3, Tag4', total: 750 },
    { projectName: 'Project C', date: '2024-05-18', categoryBusiness: 'Category C', tags: 'Tag5, Tag6', total: 1000 },
    { projectName: 'Project D', date: '2024-05-19', categoryBusiness: 'Category D', tags: 'Tag7, Tag8', total: 1250 },
    { projectName: 'Project E', date: '2024-05-20', categoryBusiness: 'Category E', tags: 'Tag9, Tag10', total: 1500 },
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Project Name</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                        <StyledTableCell align="right">Category Business</StyledTableCell>
                        <StyledTableCell align="right">Tags</StyledTableCell>
                        <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.projectName}>
                            <StyledTableCell component="th" scope="row">
                                {row.projectName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                            <StyledTableCell align="right">{row.categoryBusiness}</StyledTableCell>
                            <StyledTableCell align="right">{row.tags}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
