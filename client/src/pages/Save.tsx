import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { TypicodeUsersTable } from '../components/TypicodeUsersTable'
import axios from 'axios'

export const Save = () => {
    const appContext = useContext(AppContext)
    const { typicodeUsers } = appContext
    const [loading, setLoading] = useState<boolean>(false)
    
    const persistTypicodeUsersToDB = async () => {
        setLoading(true)
        axios.post('/api/persist-users', typicodeUsers).catch(err => {
            console.log(err)
        }).finally(() => setLoading(false))
    }

    if (loading) {
        return (
            <div className='spinner-container'>
                <div className="spinner">
                </div>
            </div>
        )
    }
    return (
        <div className='page-container'>
            <h3>Save Typicode Users to DB</h3>
            <button className='component-button' onClick={() => persistTypicodeUsersToDB()}>Save</button>
            <TypicodeUsersTable typicodeUsers={typicodeUsers} page='save'/>
        </div>
    )
}
