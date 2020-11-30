import React, {useCallback} from 'react';
import {Button, Col, Form, Input} from "antd";
const { TextArea } = Input;

const TodoItem = ({item, onDelete}) => {
  const handleDeleteItem = useCallback(() => {
    onDelete(item.id);
  }, [item.id, onDelete])

  return(
    <Form layout="inline">
      <Col span="20">
        <TextArea autoSize value={item.text}/>
      </Col>
      <Col span="3" offset="1">
        <Button danger type="text" onClick={handleDeleteItem}>x</Button>
      </Col>
    </Form>
  )
}

export default TodoItem;