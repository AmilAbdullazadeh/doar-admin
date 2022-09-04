import { FC } from "react";
import Scrollbar from "../../../../components/scrollbar";
import ComposeBtn from "../../../../components/apps/mail/compose-btn";
import MainNav from "../../../../components/apps/mail/main-nav";
import LabelNav from "../../../../components/apps/mail/label-nav";
import TagsNav from "../../../../components/apps/mail/tags-nav";
import { StyledSidebar, StyledBody } from "./style";

const Sidebar: FC = () => {
    return (
        <StyledSidebar className="sidebar">
            <Scrollbar top="0px">
                <StyledBody>
                    <ComposeBtn />
                    <MainNav />
                    <LabelNav />
                    <TagsNav />
                </StyledBody>
            </Scrollbar>
        </StyledSidebar>
    );
};

export default Sidebar;
