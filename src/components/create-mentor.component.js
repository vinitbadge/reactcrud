import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateMentor extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeMentorName = this.onChangeMentorName.bind(this);
    this.onChangeMentorEmail = this.onChangeMentorEmail.bind(this);
    this.onChangeMentorRollno = this.onChangeMentorRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }

  onChangeMentorName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeMentorEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeMentorRollno(e) {
    this.setState({ phone: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const mentorObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    axios.post('http://localhost:4000/mentors/create-mentor', mentorObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeMentorName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeMentorEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeMentorRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Mentor
        </Button>
      </Form>
    </div>);
  }
}
