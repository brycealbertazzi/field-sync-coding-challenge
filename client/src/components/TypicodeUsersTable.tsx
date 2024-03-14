import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material'
import { User } from '../types';

interface Props {
    typicodeUsers: User[];
}

export const TypicodeUsersTable: React.FC<Props> = (props) => {
    const { typicodeUsers } = props

    return (
        <TableContainer className='users-table'>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {typicodeUsers.map((row: User) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.company}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
