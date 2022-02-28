import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import Todo from '../Todo';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todoSlice'
export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todosRemainingSelector) 
  console.log(todoList)
  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    if(todoName === '')
      	return;
    dispatch(todoListSlice.actions.addTodo({
			id: uuidv4(),
			name: todoName,
			priority: priority,
			completed: false
		}));
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }

  const handleProrityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        { todoList.map((todo) => (
          <Todo id={todo.id} name={todo.name} prioriry={todo.priority} key={todo.id} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select value={priority} onChange={handleProrityChange} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
