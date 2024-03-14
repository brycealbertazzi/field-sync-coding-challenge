import React, { useEffect, useState, useContext } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material'
import { User } from '../types';
import AppContext from '../context/AppContext';
import './Pages.css'
import axios from 'axios';
import { TypicodeUsersTable } from '../components/TypicodeUsersTable';

export const Home = () => {
    const appContext = useContext(AppContext)
    const { typicodeUsers, setTypicodeUsers } = appContext

    const downloadTypicodeUsers = async () => {
        axios.get('/api/fetch-typicode-users').then(res => {
            const apiUsers: any = res.data
            const users: User[] = apiUsers.map((user: any) => {
                return {
                    id: user.id,
                    name: user.name,
                    company: user.company.name,
                    email: user.email,
                    phone: user.phone
                }
            })
            setTypicodeUsers(users)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='page-container'>
            <h3>Users from Typicode API</h3>
            <button className='component-button' onClick={() => downloadTypicodeUsers()}>Download</button>
            <TypicodeUsersTable typicodeUsers={typicodeUsers} />
        </div>
    )
}
