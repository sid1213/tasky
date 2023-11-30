import { Avatar, Badge, Card, Skeleton, Tooltip } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import Style from "./index.module.scss";
const { Meta } = Card;

const TaskCard = () => {
  return (
    <Card
      actions={[<EyeOutlined key="view" />, <EditOutlined key="edit" />]}
      className={Style.Card}
    >
      <span className={Style.Priority}>
        <Tooltip placement="topLeft" title={"High Priority"}>
          <Badge status="error" dot size="default" />
        </Tooltip>
      </span>
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          }
          title="Wake Up"
          description="I Wanna Wake up At 6AM Daily. loremImlcjdsvudcuagsvxhasvgusgdubsdvsodh bdhiosvuqsvdvqdhqvdhiqvdhivqwhix bjsx;jsjonwjoklscjsbdcjdwc sfnkf manjanljahdjdouandlmndksndndklnsd;nsddhudhbckdbfidgfagfiyhouqyrqjei ke[ idojsxks    xgd7uhowhdhuhouqydoqwjdkjdohdoq"
        />
      </Skeleton>
    </Card>
  );
};

export default TaskCard;
