import NewTodoForm from './NewTodoForm';
import { Container, Row, Col } from 'react-bootstrap'
import Todo from './Todo';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Todo App</h1>
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col className="col-5">
              <NewTodoForm />
            </Col>
            <Col className="col-3">
              <h3> Todo List </h3>
                <Todo />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
