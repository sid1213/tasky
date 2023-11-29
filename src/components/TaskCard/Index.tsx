import { Avatar, Badge, Card, Col, Row, Skeleton, Typography } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import Style from "./index.module.scss";
const { Meta } = Card;

const TaskCard = () => {
  return (
    <Card
      actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
      className={Style.Card}
    >
      <span className={Style.Priority}>
        <Badge status="error" dot size="default" />
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
