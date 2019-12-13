import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MentorTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteMentor = this.deleteMentor.bind(this);
    }

    deleteMentor() {
        axios.delete('http://localhost:4000/mentors/delete-mentor/' + this.props.obj._id)
            .then((res) => {
                console.log('Mentor successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>
                    <Link className="edit-link" to={"/edit-mentor/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteMentor} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}