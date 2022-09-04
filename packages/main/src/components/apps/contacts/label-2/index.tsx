import { FC } from "react";
import { StyledLabel } from "./style";

const Label: FC = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
