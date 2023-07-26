import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import {
    addItem,
    deleteItem,
    toggleItem,
    updateItem
} from './todoSlice';


const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [editItemId, setEditItemId] = useState();
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todo.items);
 
    const handleAddItem = () => {
       dispatch(addItem({ id: Date.now(), text: inputValue }));
       setInputValue('');
    };
 
    const handleDelete = (id) => {
       dispatch(deleteItem(id));
    };
 
    const handleToggle = (id) => {
       dispatch(toggleItem(id));
    };
 
    const handleUpdate = (id, newText) => {
       dispatch(updateItem({ id, text: newText }));
      
    };
 
    const handleEdit = (id) => {
       setEditItemId(id);
    };
 
    return (
        <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h1>Todo-List</h1>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddItem}>Add</Button>
          </Form>

          <ListGroup className="mt-3">
            {todoItems.map((todo) => (
              <div key={todo.id}>
                {editItemId === todo.id ? (
                  <div>
                    <Form.Control
                      type="text"
                      value={todo.text}
                      onChange={(e) => handleUpdate(todo.id, e.target.value)}
                    />
                    <Button variant="primary" onClick={() => setEditItemId()}>Update</Button>
                  </div>
                ) : (
                  <ListGroup.Item>
                    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</div>
                    <Form.Check
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                    />
                    <Button variant="info" onClick={() => handleEdit(todo.id)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                  </ListGroup.Item>
                )}
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    );
 };
 
export default TodoList;