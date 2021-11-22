import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon icon={faTrash} />

const Todo = ({ completeTodo, deleteTodo, id, task, priority }) => {

    function handleDelete() {
        console.log('item deleted')
        deleteTodo(id);
    }

    return (
        <div className="mt-2 justify-content-center">
            <Row>
                <Col className="5">
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" />
                    </Form.Group>
                </Col>
                <Col className = "5" style={{backgroundColor: `${priority}`}}> {task}</Col>
                <Col className="2">
                    <Button onClick={handleDelete} className="btn-sm" style={{backgroundColor: "grey"}}>{trashIcon}</Button> 
                </Col>
            </Row>
        </div>
    )
}

export default Todo;