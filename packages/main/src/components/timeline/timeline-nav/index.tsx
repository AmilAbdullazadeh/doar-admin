import { FC } from "react";
import { StyledNav } from "./style";

const TimelineNav: FC = ({ children }) => {
    return <StyledNav>{children}</StyledNav>;
};

export default TimelineNav;
