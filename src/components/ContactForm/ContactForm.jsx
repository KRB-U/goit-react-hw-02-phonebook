import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './ContactForm.styled';

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
    const { name, number } = this.state;

    evt.preventDefault();

    this.props.formDataToApp({ name, number, id: nanoid(6) });
    this.reset();

    // this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.formNameUniqueKey}>
          Name
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.formNameUniqueKey}
          />
        </label>
        <label htmlFor={this.formNumberUniqueKey}>
          Number
          <input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.formNumberUniqueKey}
          />
        </label>
        <Button type="submit" style={{ marginLeft: '15px' }}>
          Add contact
        </Button>
      </form>
    );
  }
}

export { ContactForm };
