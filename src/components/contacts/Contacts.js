import React from 'react'
import './Contacts.css'
import { ContactsArray } from './contactsArray'
import Avatar from '../avatar/Avatar'

const Contacts = () => {
    return (
        <div>
            <h3 style={{ marginLeft: '1rem', marginTop: '1rem', color: 'gray' }}>CONTACTS</h3>
            <div className='Contacts'>
                {ContactsArray.map((contact, idx) => (
                    <Avatar contact={contact} idx={idx} />
                ))}
            </div>
        </div>
    )
}

export default Contacts
