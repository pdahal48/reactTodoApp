import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon icon={faTrash} />


const Todo = ({ completeTodo, deleteTodo, id, task }) => {

    function handleDelete() {
        console.log('item deleted')
        // deleteTodo(id);
    }

    return (
        <div>
            <Row>
                <Col className="9">
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox"  label={'I am a task'}/>
                    </Form.Group>
                </Col>
                <Col className="3">
                    <Button onClick={handleDelete} className="btn-sm" style={{backgroundColor: "grey"}}>{trashIcon}</Button> 
                </Col>
            </Row>
        </div>
    )
}

export default Todo;