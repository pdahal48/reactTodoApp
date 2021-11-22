import NewTodoForm from './NewTodoForm';
import { Container, Row, Col } from 'react-bootstrap'
import Todo from './Todo';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App() {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  function addTask(newTask) {
    dispatch({ type: "ADD_TODO", task: newTask })
  }

  function deleteTask(id){
    dispatch({ type: "DELETE_TODO", id})
  }

  function completeTask(id) {
    dispatch({ type: "COMPLETE_TODO", id})
  }

  const todoTasks = tasks.map(t => (
    <Todo 
      key={t.id}
      task = {t.task}
      deleteTodo ={() => deleteTask(t.id)}
      completeTodo = {() => completeTask(t.id)}
      priority = {t.priority}
    />
  ))

  return (
    <div className="App">
        <h1>Todo App</h1>
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col className="col-5">
              <NewTodoForm addTask={addTask}/>
            </Col>
            <Col className="col-3">
              <h3> Todo List </h3>
                {todoTasks}
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
