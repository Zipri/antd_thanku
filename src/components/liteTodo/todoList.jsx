import React, {useState, useCallback} from 'react';
import {Col, Typography} from 'antd';
import TodoItem from "./toDoItem";
import TodoForm from "./toDoForm";
import {MOCK_DATA} from "./mockData";

const { Title } = Typography;

function LiteTodo() {
  const [data, setData] = useState(MOCK_DATA);

  const handleDelete = useCallback((itemId) => {
    setData((data.filter(item => item.id !== itemId)));
  }, [data]);

  const handleAdd = useCallback((text) => {
    setData([...data,{
      id: data.length,
      text,
    }])
  }, [data])

  return (
    <div>
      <Title level={3}>
        <Col span="12" offset="6"> TODO 4 u </Col>
      </Title>

      <TodoForm onAdd={handleAdd}/>
      <br/>
      {data.map(item =>
        <>
          <TodoItem
            item={item}
            key={item.id}
            onDelete={handleDelete}
          />
          <br/>
        </>
      )}
    </div>
  )
}

export default  LiteTodo;