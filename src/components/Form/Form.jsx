import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value, number } = event.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };

  addToContacts = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.addToContacts}>
        <label className={css.form_input} htmlFor={nanoid()}>
          <h4 className={css.input_title}>Name</h4>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nanoid()}
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label className={css.form_input} htmlFor={nanoid()}>
          <h4 className={css.input_title}>Number</h4>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={nanoid()}
            onChange={this.handleChange}
            value={number}
          />
        </label>

        <button className={css.add_contact_btn} type="subbmit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
