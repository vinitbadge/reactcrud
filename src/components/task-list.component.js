import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TaskTableRow from './TaskTableRow';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'


export default class TaskList extends Component {

    constructor(props) {
        super(props)
        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.state = {
            tasks: [],
            name: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeTaskName(e) {
        this.setState({ name: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const taskObject = {
            name: this.state.name
        };

        axios.post('http://localhost:4000/mentors/create-task/' + this.props.match.params.id, taskObject)
            .then(
                window.location.reload()
            );

        // this.setState({
        //     name: ''
        // });
    }
    componentDidMount() {
        axios.get('http://localhost:4000/mentors/tasks/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    tasks: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.tasks.map((res, i) => {
            return <TaskTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (
            <div className="table-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Task</Form.Label>
                        <Table >
                            <tbody>
                                <tr>
                                    <td>

                                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeTaskName} />
                                    </td>
                                    <td>
                                        <Button size="sm" block="block" type="submit">
                                            Create Task
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                    </Form.Group>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Task List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </Table>


                </Form>
                {/* <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} name="item" className="item" />
                    <button className="btn-add-item">Add</button>
                </form> */}

            </div>
        );
    }
}

