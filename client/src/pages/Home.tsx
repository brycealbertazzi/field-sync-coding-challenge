import React, { useState, useContext } from 'react'
import { User } from '../types';
import AppContext from '../context/AppContext';
import './Pages.css'
import axios from 'axios';
import { TypicodeUsersTable } from '../components/TypicodeUsersTable';
import GoogleMapComponent from '../components/GoogleMapsComponent';

export const Home = () => {
    const appContext = useContext(AppContext)
    const { typicodeUsers, setTypicodeUsers, googleMapsSelectedUser } = appContext
    const [loading, setLoading] = useState<boolean>(false)

    const downloadTypicodeUsers = async () => {
        setLoading(true)
        axios.get('/api/fetch-typicode-users').then(res => {
            const apiUsers: any = res.data
            const users: User[] = apiUsers.map((user: any) => {
                return {
                    id: user.id,
                    name: user.name,
                    company: user.company.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                }
            })
            console.log(users)
            setTypicodeUsers(users)
        }).catch(err => {
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
            <h3>Users from Typicode API</h3>
            <button className='component-button' onClick={() => downloadTypicodeUsers()}>Download</button>
            <TypicodeUsersTable typicodeUsers={typicodeUsers} page='home'/>
            {/* {googleMapsSelectedUser && <GoogleMaps lat={Number(googleMapsSelectedUser?.address.geo.lat)} lng={Number(googleMapsSelectedUser?.address.geo.lng)} />} */}
            <GoogleMapComponent lat={Number(googleMapsSelectedUser?.address.geo.lat)} lng={Number(googleMapsSelectedUser?.address.geo.lng)} selectedUser={googleMapsSelectedUser}/>
        </div>
    )
}
