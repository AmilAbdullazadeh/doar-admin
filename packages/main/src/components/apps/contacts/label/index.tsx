import { FC } from "react";
import { StyledLabel } from "./style";

interface IProps {
    size?: "lg";
}

const Label: FC<IProps> = ({ children, size }) => {
    return <StyledLabel $size={size}>{children}</StyledLabel>;
};

export default Label;
