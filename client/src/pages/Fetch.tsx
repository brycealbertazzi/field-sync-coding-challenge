import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { PostgreDBUser } from '../types'
import { PostgreDBUserTable } from '../components/PostgreDBUserTable'

export const Fetch = () => {
    
    const [postgreSQLUsers, setPostgreSQLUsers] = useState<PostgreDBUser[]>([]);
    
    const fetchUsersFromPosgresDB = async () => {
        axios.get('/api/fetch-users').then(res => {
            setPostgreSQLUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='page-container'>
            <h3>Fetch Users from Postgres DB</h3>
            <button className='component-button' onClick={() => fetchUsersFromPosgresDB()}>Fetch</button>
            <PostgreDBUserTable postgreDBUsers={postgreSQLUsers} />
        </div>
    )
}
