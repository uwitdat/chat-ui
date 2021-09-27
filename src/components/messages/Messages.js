import React from 'react'
import './Messages.css'
import { ContactsArray } from '../contacts/contactsArray'
import Avatar from '../avatar/Avatar'

const Messages = () => {
    return (
        <div>
            <h3 style={{ marginLeft: '1rem', marginTop: '1rem', color: 'gray' }}>MESSAGES</h3>
            <div className='vert-scroll'>
                {ContactsArray.map((contact) => (
                    <div className='Message-container'>
                        <div className='col-1'>
                            <Avatar contact={contact} />
                        </div>
                        <div className='col-2'>
                            <h3>{contact.name}</h3>
                            <p>{contact.msg}</p>
                        </div>
                        <div className='col-3'>
                            <p>{contact.timestamp}</p>
                            <div className='notif'><span>{contact.notif}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Messages
