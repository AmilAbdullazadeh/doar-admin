import { FC } from "react";
import { StyledTitle } from "./style";

const WidgetTitle: FC = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default WidgetTitle;
