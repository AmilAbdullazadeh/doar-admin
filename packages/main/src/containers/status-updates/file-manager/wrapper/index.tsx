import { FC } from "react";
import { StyledWrapper } from "./style";

const Wrapper: FC = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
