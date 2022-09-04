import { FC } from "react";
import classnames from "classnames";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { StyledHr } from "./style";

interface IProps extends SpaceProps, BorderProps {
    className?: string;
}

const HRLine: FC<IProps> = ({ className, ...restProps }) => {
    return <StyledHr className={classnames(className)} {...restProps} />;
};

export default HRLine;
