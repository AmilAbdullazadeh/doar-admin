import { FC } from "react";
import { Row, Col } from "@doar/components";
import HelpBox from "../../../components/help-center/help-box";

const RowTwo: FC = () => {
    return (
        <Row>
            <Col sm={6} lg={3}>
                <HelpBox
                    icon="fa-cog"
                    title="Integrations"
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molesti..."
                    topics={18}
                />
            </Col>
            <Col sm={6} lg={3} mt={["20px", 0]}>
                <HelpBox
                    icon="fa-laptop"
                    title="Supported Devices"
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molesti..."
                    topics={22}
                />
            </Col>
            <Col sm={6} lg={3} mt={["20px", "30px", null, 0]}>
                <HelpBox
                    icon="fa-shopping-cart"
                    title="Pricing &amp; Billing"
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molesti..."
                    topics={11}
                />
            </Col>
            <Col sm={6} lg={3} mt={["20px", "30px", null, 0]}>
                <HelpBox
                    icon="fa-fill"
                    title="Features"
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molesti..."
                    topics={15}
                />
            </Col>
        </Row>
    );
};

export default RowTwo;
