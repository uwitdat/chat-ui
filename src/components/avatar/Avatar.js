import React from 'react'
import './Avatar.css'

const Avatar = ({ contact, idx }) => {
    return (
        <div className='Avatar-container' key={idx}>
            <img src={contact.img} alt='profile-pic' /><div className={contact.isOnline ? 'online' : 'offline'}></div>
        </div>

    )
}

export default Avatar
