import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledLabel } from "./style";

type IProps = SpaceProps;

const Label: FC<IProps> = ({ children, ...rest }) => {
    return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
