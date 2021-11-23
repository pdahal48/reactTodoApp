import React, {useState} from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon icon={faTrash} />

const Todo = ({ deleteTodo, id, task, priority }) => {

    const INITIAL_STATE = {
        completed: false
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleDelete() {
        console.log('item deleted')
        deleteTodo(id);
    }

    const handleChange = (e) => {
        let checked = e.target.checked;
        let name = e.target.name;
        setFormData( data => ({...data, [name]: checked}))
    }

    return (
        <div className="mt-2 justify-content-center">
            <Row>
                <Col className="5">
                    <Form.Group className="mb-3">
                        <Form.Check 
                            type="checkbox" 
                            className="checkbox"
                            name="completed"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                {formData.completed ? 
                    <Col 
                        className = "5"
                        style={{backgroundColor: `${priority}`,                    
                        textDecoration:"line-through"}}> 
                        {task}
                    </Col>
                : 
                    <Col 
                        className = "5"
                        style={{backgroundColor: `${priority}`}}> 
                        {task}
                    </Col>                
                }
                <Col className="2">
                    <Button onClick={handleDelete} className="btn-sm" style={{backgroundColor: "grey"}}>{trashIcon}</Button> 
                </Col>
            </Row>
        </div>
    )
}

export default Todo;