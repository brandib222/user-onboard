import React from 'react'

export default function User({ details }) {
    if(!details) {
        return <h3>Working to get your user info</h3>
    }

    return (
        <div className='user-container'>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
        </div>

    )
}