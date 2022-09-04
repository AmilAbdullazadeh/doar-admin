import { FC } from "react";
import { Col } from "@doar/components";
import PopularGroups from "../../../components/widgets/popular-groups";
import GroupsByPosition from "../../../components/widgets/groups-by-position";
import GroupsByLocation from "../../../components/widgets/groups-by-location";
import { StyledWrap } from "./style";

const Sidebar: FC = () => {
    return (
        <Col lg={3} mt={["40px", null, null, "0px"]}>
            <StyledWrap>
                <PopularGroups />
            </StyledWrap>
            <StyledWrap>
                <GroupsByPosition />
            </StyledWrap>
            <StyledWrap>
                <GroupsByLocation />
            </StyledWrap>
        </Col>
    );
};

export default Sidebar;
