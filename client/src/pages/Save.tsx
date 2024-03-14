import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { TypicodeUsersTable } from '../components/TypicodeUsersTable'
import axios from 'axios'

export const Save = () => {
    const appContext = useContext(AppContext)
    const { typicodeUsers } = appContext
    
    const persistTypicodeUsersToDB = async () => {
        console.log(typicodeUsers)
        axios.post('/api/persist-users', typicodeUsers).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='page-container'>
            <h3>Save Typicode Users to DB</h3>
            <button className='component-button' onClick={() => persistTypicodeUsersToDB()}>Save</button>
            <TypicodeUsersTable typicodeUsers={typicodeUsers} />
        </div>
    )
}
