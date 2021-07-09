import React, { Component } from "react";

import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
//import ContactForm from "./components/ContactForm/ContactForm";
import FormikContactForm from "../src/components/FormikContactForm/FormikContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    this.state.contacts.find((contact) => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onInputSearch = () => {
    const { filter, contacts } = this.state;
    const searchName = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchName)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== contactId;
      }),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.onInputSearch();
    return (
      <Container>
        <Section title={"Phonebook"}>
          <FormikContactForm onSubmit={this.addContact} />
        </Section>
        {/* <ContactForm onSubmit={this.addContact}></ContactForm> */}
        <Section title={"Contacts"}>
          <Filter onChange={this.changeFilter} value={filter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </Container>
    );
  }
}

export default App;
