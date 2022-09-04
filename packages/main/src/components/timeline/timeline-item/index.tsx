import { FC } from "react";
import { StyledItem } from "./style";

const TimelineItem: FC = ({ children }) => {
    return <StyledItem className="timeline-item">{children}</StyledItem>;
};

export default TimelineItem;
