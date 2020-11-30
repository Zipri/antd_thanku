import React from 'react';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import SliderMenu from "../components/menu";
import BigCalendar from "../components/bigCalendar";
import FuckToDo from "../components/toDoList";
import LiteTodo from "../components/liteTodo/todoList";

export default function Home() {
  return (
    <div>
      <Row>
        <Col span={3}>
          <SliderMenu />
        </Col>
        <Col span={15} offset={1}>
          <BigCalendar />
        </Col>
        <Col span={4} offset={1}>
          <LiteTodo />
          <FuckToDo />
        </Col>
      </Row>
    </div>
  );
}