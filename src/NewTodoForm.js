import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './App.css'

const NewTodoForm = () => {
    const INITIAL_DATA = {
        task: "",
        priority: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        //adding todo logic goes here;
        setFormData(INITIAL_DATA);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2"> Task </Form.Label>
            <Col md="5">
            <Form.Control 
                type="text"
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
            />
            </Col>
            <Col md="3">
            <Form.Select value={formData.priority} onChange={handleChange} name="priority">
                <option>Urgency</option>
                <option id="1" onChange={handleChange}>High</option>
                <option id="2" onChange={handleChange}>Medium</option>
                <option id="3" onChange={handleChange}>Low</option>
            </Form.Select>
            </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default NewTodoForm;