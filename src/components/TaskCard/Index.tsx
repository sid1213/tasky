import React, { useEffect } from "react";
import { Avatar, Card, Skeleton, Badge } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import Style from "./index.module.scss";
import { Task } from "../../types";

const { Meta } = Card;
interface PropType extends Task {
  editId: string | null;
  setEditId: React.Dispatch<React.SetStateAction<string | null>>;
  setEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskCard: React.FC<PropType> = ({
  title,
  description,
  id,
  priority,
  cStatus,
  setEditId,
  setEditFormOpen,
}) => {
  useEffect(() => {
    setEditFormOpen(false);
  }, [setEditId, setEditFormOpen]);

  return (
    <Badge.Ribbon
      text="Completed"
      color="green"
      style={{ display: cStatus === "done" ? "block" : "none" }}
      rootClassName={Style.badge}
    >
      <Card
        actions={[
          <span>{priority}</span>,
          <EditOutlined
            key="edit"
            onClick={() => {
              setEditId(id);
              setEditFormOpen(true);
            }}
          />,
        ]}
        className={Style.Card}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            }
            title={title}
            description={description}
          />
        </Skeleton>
      </Card>
    </Badge.Ribbon>
  );
};

export default TaskCard;
