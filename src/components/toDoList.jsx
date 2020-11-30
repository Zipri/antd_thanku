import React from 'react';
import { useState } from 'react';
import { List, Typography, Checkbox } from 'antd';

export default function FuckToDo () {
  const [tasks, setTasks] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]);

  return (
    <div>
      <List
        header={<div>Header</div>}
        footer={
          <div>
            <input
              id="inputTodo"
              placeholder="write a new task here"
            />
            <button onClick={() => setTasks([
              ...tasks,
              document.getElementById("inputTodo").value
            ])}>
              tasks
            </button>
          </div>}
        bordered
        dataSource={tasks}
        renderItem={item => (
          <List.Item>
            <Checkbox>
              {/*<Typography.Text mark>[ITEM]</Typography.Text> */}
              {item}
            </Checkbox>
            <button onClick={() => setTasks(
              tasks.splice(3,1)
            )}>
              x
            </button>
          </List.Item>
        )}
      />
    </div>
  );
}