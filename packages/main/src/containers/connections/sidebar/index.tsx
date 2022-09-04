import { FC } from "react";
import { Col } from "@doar/components";
import PeopleMayKnow from "../../../components/widgets/people-may-know";
import PositionDiscover from "../../../components/widgets/position-discover";
import LocationDiscover from "../../../components/widgets/location-discover";
import { StyledWrap } from "./style";

const Sidebar: FC = () => {
    return (
        <Col lg={3} mt={["40px", null, null, "0px"]}>
            <StyledWrap>
                <PeopleMayKnow />
            </StyledWrap>
            <StyledWrap>
                <PositionDiscover />
            </StyledWrap>
            <StyledWrap>
                <LocationDiscover />
            </StyledWrap>
        </Col>
    );
};

export default Sidebar;
