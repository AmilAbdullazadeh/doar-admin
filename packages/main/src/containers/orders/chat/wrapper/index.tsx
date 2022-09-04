import { FC } from "react";
import { StyledWrapper } from "./style";

const Wrapper: FC = ({ children }) => {
    return <StyledWrapper className="wrapper">{children}</StyledWrapper>;
};

export default Wrapper;
