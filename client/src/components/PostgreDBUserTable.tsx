import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material'
import { PostgreDBUser } from '../types';

interface Props {
    postgreDBUsers: PostgreDBUser[];
}

export const PostgreDBUserTable: React.FC<Props> = (props) => {
    const { postgreDBUsers} = props

    return (
        <TableContainer className='users-table'>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>PostgreID</TableCell>
                    <TableCell>UserID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {postgreDBUsers.map((row: PostgreDBUser) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.user_id}</TableCell>
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