import Style from "./index.module.scss";
import {
  Col,
  FloatButton,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Typography,
} from "antd";
import TaskCard from "../TaskCard/Index";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
const { Option } = Select;
const ContentBox = () => {
  // const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className={Style.ContentBox}>
      <Title level={3}>TASK MANAGER</Title>

      <Row className={Style.header}>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}>🤯 HIGH</Title>
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}> 🚨 MEDIUM</Title>
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <Title level={5}> ❗️ LOW</Title>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={8} className={Style.TaskContainer}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </Col>
        <Col span={8} className={Style.TaskContainer}>
          <TaskCard />
          <TaskCard />

          <TaskCard />
          <TaskCard />
        </Col>
      </Row>
      <FloatButton
        rootClassName={Style.Add}
        type="primary"
        tooltip={"Add new task"}
        icon={<PlusSquareOutlined />}
        className={Style.Add}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="Add new Task"
        open={open}
        okText="Add"
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <Form name="Add Task" layout="vertical">
          <Form.Item name={"title"} label="Title">
            <Input />
          </Form.Item>
          <Form.Item name={"description"} label="Description">
            <Input />
          </Form.Item>
          <Form.Item name="priority" label="Priority">
            <Select allowClear>
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContentBox;
