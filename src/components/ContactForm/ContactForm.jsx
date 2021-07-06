import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { Label, Input, Button } from "./ContactForm.styled";
import Section from "../Section/Section";


const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const {name, number} = this.state;
    this.props.onSubmit({id: uuidv4(), name, number });
    this.formReset();
  };

  formReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Section title={"Phonebook"}>
        <form onSubmit={this.onFormSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onInputChange}
              value={name} // в value значение инпута
              autoFocus
            />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onInputChange}
              value={number}
              placeholder='8(***) *** ****'
            />
          </Label>
          <Button>Add Contact</Button>
        </form>
      </Section>
    );
  }
}

export default ContactForm;
