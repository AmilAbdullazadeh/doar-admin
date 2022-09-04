import { FC } from "react";
import { PositionProps } from "@doar/shared/styled";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { StyledWrap } from "./style";

const ScrollBar: FC<PositionProps> = ({ children, ...rest }) => {
    return (
        <StyledWrap {...rest}>
            <PerfectScrollbar>{children}</PerfectScrollbar>
        </StyledWrap>
    );
};

export default ScrollBar;
