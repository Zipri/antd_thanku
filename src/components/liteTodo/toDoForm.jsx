import React, {useCallback, useState} from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const TodoForm = ({onAdd}) => {
  const [inputValue, setValue] = useState('');

  const handleClick = useCallback(() => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
    }
    setValue('');
  }, [onAdd, inputValue])

  return (
    <Form layout="inline">
      <Form.Item label="Task">
        <Input
        type="text"
        placeholder="write a new task here"
        onChange={event => setValue(event.target.value)}
        value={inputValue}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleClick}>
          +
        </Button>
      </Form.Item>
    </Form>
  )

}

export default TodoForm;