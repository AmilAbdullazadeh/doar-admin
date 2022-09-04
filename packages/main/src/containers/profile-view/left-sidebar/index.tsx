import { FC } from "react";
import { Row, Col } from "@doar/components";
import UserAvatar from "../../../components/widgets/user-avatar";
import UserDetails from "../../../components/widgets/user-details";
import UserSkill from "../../../components/widgets/user-skills";
import UserWebsites from "../../../components/widgets/user-websites";
import UserContactInfo from "../../../components/widgets/user-contact-info";
import Explore from "../../../components/widgets/explore";
import { StyledWrap } from "./style";

const LeftSidebar: FC = () => {
    return (
        <StyledWrap>
            <Row>
                <Col sm={3} md={2} lg={12}>
                    <UserAvatar />
                </Col>
                <Col sm={8} md={7} lg={12} mt={["20px", "0px", null, "25px"]}>
                    <UserDetails />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserSkill />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserWebsites />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px" mb="16px">
                    <UserContactInfo />
                </Col>
                <Col sm={6} md={5} lg={12} mt="40px">
                    <Explore />
                </Col>
            </Row>
        </StyledWrap>
    );
};

export default LeftSidebar;
