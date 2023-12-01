import React, { useEffect, useState } from "react";

import { Button, Form, Input, Modal, Select } from "antd";

import Style from "./index.module.scss";

import { useTaskContext } from "../../context/AppContext";
import { Task } from "../../types";

const { Option } = Select;

const EditTask: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}> = ({ open, setOpen, id }) => {
  const [form] = Form.useForm<Task>();
  const { tasks, toggleTask } = useTaskContext();
  const index = tasks.findIndex((ele) => ele.id === id);
  const [currentTask, setCurrentTask] = useState(tasks[index]);

  useEffect(() => {
    form.setFieldsValue({
      title: currentTask.title,
      description: currentTask.description,
      priority: currentTask.priority,
      cStatus: currentTask.cStatus,
    });
    setCurrentTask(tasks[index]);
  }, [currentTask, form, index, tasks]);

  const handleEdit = (values: Task) => {
    toggleTask({ ...values, id: id });
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Add New Task"
        open={open}
        okText="Add"
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form
          name={`Add Task`}
          layout="vertical"
          form={form}
          onFinish={handleEdit}
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
          <Form.Item name="cStatus" label="Status" rules={[{ required: true }]}>
            <Select>
              <Option value="done">Completed</Option>
              <Option value="inprogress">In-Progress</Option>
            </Select>
          </Form.Item>

          <Form.Item className={Style.formBtn}>
            <Button type="primary" htmlType="reset">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save changes...
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditTask;
