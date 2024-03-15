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
                <TableHead className='users-head'>
                    <TableRow>
                        <TableCell><h3>PostgreID</h3></TableCell>
                        <TableCell><h3>UserID</h3></TableCell>
                        <TableCell><h3>Name</h3></TableCell>
                        <TableCell><h3>Company</h3></TableCell>
                        <TableCell><h3>Email</h3></TableCell>
                        <TableCell><h3>Phone</h3></TableCell>
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