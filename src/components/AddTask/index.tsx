import React, { useState, useEffect } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, FloatButton, Form, Input, Modal, Select } from "antd";

import Style from "./index.module.scss";

import { useTaskContext } from "../../context/AppContext";
import { Task } from "../../types";

const { Option } = Select;

const AddTask: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm<Task>();
  const { tasks, addTask } = useTaskContext();

  const handleAdd = (values: Task) => {
    if (addTask === undefined) {
      return;
    }

    addTask(values.title, values.description, values.priority, "inprogress");
    setOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {}, [tasks, addTask, form]);

  return (
    <>
      <FloatButton
        rootClassName={Style.Add}
        type="primary"
        tooltip={"Add new task"}
        icon={<PlusSquareOutlined />}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="Add New Task"
        open={open}
        onCancel={() => setOpen(false)}
        okText="Add"
        footer={null}
      >
        <Form
          name="Add Task"
          layout="vertical"
          form={form}
          initialValues={{
            priority: "high",
          }}
          onFinish={handleAdd}
          onReset={handleCancel}
        >
          <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={"description"}
            label="Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="high">High</Option>
              <Option value="medium">Medium</Option>
              <Option value="low">Low</Option>
            </Select>
          </Form.Item>

          <Form.Item className={Style.formBtn}>
            <Button type="primary" htmlType="reset">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTask;
