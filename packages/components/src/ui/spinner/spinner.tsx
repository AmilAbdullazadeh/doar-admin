import { FC } from "react";
import classnames from "classnames";
import { StyledSpinner } from "./style";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     *  Default is `border`.
     */
    variant?: "border" | "grow";
    /**
     * Default is `text`.
     */
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "white";
    /**
     * Default is `md`.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Spinner: FC<IProps> = ({
    className,
    variant = "border",
    color,
    size,
    ...restProps
}) => {
    return (
        <StyledSpinner
            className={classnames(className, "spinner", `spinner-${variant}`)}
            $variant={variant}
            $color={color}
            $size={size}
            {...restProps}
        />
    );
};

Spinner.defaultProps = {
    variant: "border",
    size: "md",
};
