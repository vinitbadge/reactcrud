import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import Button from 'react-bootstrap/Button';

export default class MentorTableRow extends Component {

    // constructor(props) {
    //     super(props);
    // }



    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
            </tr>
        );
    }
}