import React from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledBadge } from "./style";

export interface BadgeProps extends SpaceProps {
    /**
     * The visual style of the badge
     */
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    /**
     *  Optional. Default is `contained`.
     */
    variant?: "contained" | "texted";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "circle";
    /**
     * Pass the `pill` props to make badges more rounded with some additional horizontal padding
     */
    pill?: boolean;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    color,
    variant,
    shape,
    pill,
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledBadge
            $color={color}
            $variant={variant}
            $shape={shape}
            $pill={pill}
            className={classnames(className, "badge")}
            {...restProps}
        >
            {children}
        </StyledBadge>
    );
};

Badge.defaultProps = {
    color: "primary",
    variant: "contained",
    shape: "rounded",
};
