import React, { useState, useContext } from 'react'
import AppContext from '../context/AppContext';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material'
import { User } from '../types';

interface Props {
    typicodeUsers: User[];
    page: string;
}

export const TypicodeUsersTable: React.FC<Props> = (props) => {
    const { typicodeUsers, page } = props
    const appContext = useContext(AppContext)
    const { setGoogleMapsSelectedUser } = appContext
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    return (
        <TableContainer className='users-table'>
            <Table aria-label="simple table">
                <TableHead className='users-head'>
                <TableRow>
                    <TableCell><h3>ID</h3></TableCell>
                    <TableCell><h3>Name</h3></TableCell>
                    <TableCell><h3>Company</h3></TableCell>
                    <TableCell><h3>Email</h3></TableCell>
                    <TableCell><h3>Phone</h3></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {typicodeUsers.map((user: User) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        {page === 'home'
                            ?
                                <TableCell>
                                    <a href="#" onClick={() => setGoogleMapsSelectedUser(user)}>{user.name}</a>
                                </TableCell>
                            :
                                <TableCell>{user.name}</TableCell>
                        }
                        <TableCell>{user.company}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
