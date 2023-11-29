import React, { useState } from "react";
import Style from "./index.module.scss";
import { Col, Row, Typography } from "antd";
import TaskCard from "../TaskCard/Index";

const { Title } = Typography;

const ContentBox = () => {
  // const [loading, setLoading] = useState(true);
  return (
    <div>
      <Title level={3}>TASK MANAGER</Title>
      <Row gutter={10}>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}>HIGH</Title>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}>MEDIUM</Title>
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}>LOW</Title>
        </Col>
      </Row>
    </div>
  );
};

export default ContentBox;
