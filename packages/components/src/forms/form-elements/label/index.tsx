import { FC } from "react";
import classnames from "classnames";
import { SpaceProps, TypographyProps, LayoutProps } from "@doar/shared/styled";
import { StyledLabel } from "./style";

interface IProps extends SpaceProps, TypographyProps, LayoutProps {
    htmlFor: string;
    className?: string;
}

export const Label: FC<IProps> = ({
    children,
    htmlFor,
    className,
    ...rest
}) => {
    return (
        <StyledLabel
            htmlFor={htmlFor}
            className={classnames(className, "label")}
            {...rest}
        >
            {children}
        </StyledLabel>
    );
};
