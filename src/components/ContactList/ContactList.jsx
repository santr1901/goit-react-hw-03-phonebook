import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contacts_list}>
      {contacts.map(contact => (
        <li className={css.list_item} key={contact.id}>
          <p>
            <span>{contact.name}</span>: <span>{contact.number}</span>
          </p>
          <button
            className={css.delete_btn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
