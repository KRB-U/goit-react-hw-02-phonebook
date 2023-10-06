import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

import 'components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Liam Harris', number: '123-45-67' },
      { id: 'id-6', name: 'Emma Thompson', number: '987-65-43' },
      { id: 'id-7', name: 'Oliver Davis', number: '876-54-32' },
      { id: 'id-8', name: 'Ava Martinez', number: '765-43-21' },
      { id: 'id-9', name: 'Noah Anderson', number: '654-32-10' },
      { id: 'id-10', name: 'Isabella Wilson', number: '543-21-09' },
      { id: 'id-11', name: 'Sophia Garcia', number: '432-10-98' },
      { id: 'id-12', name: 'Mason Taylor', number: '321-09-87' },
      { id: 'id-13', name: 'Lily Lee', number: '210-98-76' },
      { id: 'id-14', name: 'James Clark', number: '109-87-65' },
      { id: 'id-15', name: 'Grace Rodriguez', number: '098-76-54' },
      { id: 'id-16', name: 'Benjamin Lewis', number: '987-65-43' },
      { id: 'id-17', name: 'Mia Hall', number: '876-54-32' },
      { id: 'id-18', name: 'Henry Young', number: '765-43-21' },
      { id: 'id-19', name: 'Emily Hernandez', number: '654-32-10' },
      { id: 'id-20', name: 'Alexander Moore', number: '543-21-09' },
      { id: 'id-21', name: 'Lucy Foster', number: '432-10-98' },
      { id: 'id-22', name: 'Sophia Garcia', number: '321-09-87' },
      { id: 'id-23', name: 'Mia Hall', number: '210-98-76' },
      { id: 'id-24', name: 'Grace Rodriguez', number: '109-87-65' },
      { id: 'id-25', name: 'Benjamin Lewis', number: '098-76-54' },
      { id: 'id-26', name: 'Mia Hall', number: '987-65-43' },
      { id: 'id-27', name: 'Henry Young', number: '876-54-32' },
      { id: 'id-28', name: 'Emily Hernandez', number: '765-43-21' },
      { id: 'id-29', name: 'Alexander Moore', number: '654-32-10' },
      { id: 'id-30', name: 'Sophia Garcia', number: '543-21-09' },
    ],
    filter: '',
  };

  nameUniqueKey = nanoid(5);

  handleSubmitForm = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    //
    this.setState(prevState => {
      console.log(prevState);
    });
  };
  //FILTER
  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    //toLowerCase Filter
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm formDataToApp={this.handleSubmitForm}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          stateValue={filter}
          stateFromFilter={this.changeFilter}
        ></Filter>
        <ContactList arrContacts={visibleContacts}></ContactList>
      </>
    );
  }
}

export { App };
