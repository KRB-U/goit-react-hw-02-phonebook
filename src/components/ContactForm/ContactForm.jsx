import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  LabelInputName,
  InputName,
  LabelInputPhone,
  InputPhone,
  Button,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  formNameUniqueKey = nanoid(10);
  formNumberUniqueKey = nanoid(7);

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;

    this.props.formDataToApp({ name, number, id: nanoid(6) });
    this.reset();

    // this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <LabelInputName htmlFor={this.formNameUniqueKey}>Name</LabelInputName>
          <InputName
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.formNameUniqueKey}
          />

          <LabelInputPhone htmlFor={this.formNumberUniqueKey}>
            Number{' '}
          </LabelInputPhone>
          <InputPhone
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.formNumberUniqueKey}
          />

          <Button type="submit">Add contact</Button>
        </form>
      </FormContainer>
    );
  }
}

export { ContactForm };
