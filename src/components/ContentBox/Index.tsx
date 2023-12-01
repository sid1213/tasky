import React, { useEffect, useState } from "react";

import Style from "./index.module.scss";
import { Col, Row, Typography } from "antd";
import TaskCard from "../TaskCard/Index";
import AddTask from "../AddTask";
import { useTaskContext } from "../../context/AppContext";
import EditTask from "../EditTask";

const { Title } = Typography;

const ContentBox: React.FC = () => {
  const { tasks } = useTaskContext();
  const [editFromOpen, setEditFormOpen] = useState<boolean>(false);

  const [editId, setEditId] = useState<string | null>(null);
  useEffect(() => {
    if (editId !== null) {
      setEditId(editId);
    }
  }, [setEditFormOpen, editId, tasks, setEditId]);

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
      <Row justify={"center"} align={"middle"} className={Style.tasks}>
        {tasks.length !== 0 ? (
          <>
            <Col span={24} md={8} className={Style.TaskContainer}>
              <Title level={5} className={Style.hide}>
                🤯 HIGH
              </Title>
              {tasks
                .filter((task) => task.priority === "high")
                .map((task) => (
                  <TaskCard
                    id={task.id}
                    description={task.description}
                    priority={task.priority}
                    title={task.title}
                    key={task.id}
                    cStatus={task.cStatus}
                    editId={editId}
                    setEditId={setEditId}
                    setEditFormOpen={setEditFormOpen}
                  />
                ))}
            </Col>
            <Col span={24} md={8} className={Style.TaskContainer}>
              <Title level={5} className={Style.hide}>
                {" "}
                🚨 MEDIUM
              </Title>

              {tasks
                .filter((task) => task.priority === "medium")
                .map((task) => (
                  <TaskCard
                    id={task.id}
                    description={task.description}
                    priority={task.priority}
                    title={task.title}
                    cStatus={task.cStatus}
                    key={task.id}
                    editId={editId}
                    setEditId={setEditId}
                    setEditFormOpen={setEditFormOpen}
                  />
                ))}
            </Col>
            <Col span={24} md={8} className={Style.TaskContainer}>
              <Title level={5} className={Style.hide}>
                {" "}
                ❗️ LOW
              </Title>

              {tasks
                .filter((task) => task.priority === "low")
                .map((task) => (
                  <TaskCard
                    id={task.id}
                    description={task.description}
                    priority={task.priority}
                    title={task.title}
                    cStatus={task.cStatus}
                    key={task.id}
                    editId={editId}
                    setEditId={setEditId}
                    setEditFormOpen={setEditFormOpen}
                  />
                ))}
            </Col>
          </>
        ) : (
          <Title level={2} type="secondary">
            "Please Add Tasks"
          </Title>
        )}
      </Row>
      <AddTask />
      {editId !== null ? (
        <EditTask id={editId} open={editFromOpen} setOpen={setEditFormOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentBox;
