import React from 'react'
import './Contacts.css'
import { ContactsArray } from './contactsArray'

console.log(ContactsArray)

const Contacts = () => {
    return (
        <div>
            <h3 style={{ marginLeft: '1rem', marginTop: '1rem', color: 'gray' }}>CONTACTS</h3>
            <div className='Contacts'>
                {ContactsArray.map((contact, idx) => (
                    <div className='Contacts-container' key={idx}>
                        <img src={contact.img} alt='profile-pic' /><div className={contact.isOnline ? 'online' : 'offline'}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contacts
