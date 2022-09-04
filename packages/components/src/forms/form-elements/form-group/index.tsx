import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import classnames from "classnames";
import { StyledGroup } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

export const FormGroup: FC<IProps> = ({ children, className, ...rest }) => {
    return (
        <StyledGroup className={classnames(className, "form-group")} {...rest}>
            {children}
        </StyledGroup>
    );
};
