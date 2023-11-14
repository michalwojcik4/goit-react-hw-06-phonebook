import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={css.contacts}>
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </div>
);

export default ContactList;
