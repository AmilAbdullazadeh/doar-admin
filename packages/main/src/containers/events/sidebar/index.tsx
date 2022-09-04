import { FC } from "react";
import { Col } from "@doar/components";
import UpcomingEvents from "../../../components/widgets/upcoming-events";
import EventsByLocation from "../../../components/widgets/events-by-location";
import { StyledWrap } from "./style";

const Sidebar: FC = () => {
    return (
        <Col sm={7} md={5} lg={4} xl={3} mt={["40px", null, null, "0px"]}>
            <StyledWrap>
                <UpcomingEvents />
            </StyledWrap>
            <StyledWrap>
                <EventsByLocation />
            </StyledWrap>
        </Col>
    );
};

export default Sidebar;
