import { FC } from "react";
import { StyledWrap } from "./style";

const Wrapper: FC = ({ children }) => {
    return <StyledWrap>{children}</StyledWrap>;
};

export default Wrapper;
