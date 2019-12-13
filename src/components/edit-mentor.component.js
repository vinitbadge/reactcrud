import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditMentor extends Component {

  constructor(props) {
    super(props)

    this.onChangeMentorName = this.onChangeMentorName.bind(this);
    this.onChangeMentorEmail = this.onChangeMentorEmail.bind(this);
    this.onChangeMentorRollno = this.onChangeMentorRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/mentors/edit-mentor/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/mentors/update-mentor/' + this.props.match.params.id, mentorObject)
      .then((res) => {
        console.log(res.data)
        console.log('Mentor successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Mentor List 
    this.props.history.push('/mentor-list')
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
          Update Mentor
        </Button>
      </Form>
    </div>);
  }
}
