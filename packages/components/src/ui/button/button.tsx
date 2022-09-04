/* eslint-disable react/button-has-type */
import { FC } from "react";
import classnames from "classnames";
import {
    SpaceProps,
    LayoutProps,
    BorderProps,
    TypographyProps,
} from "@doar/shared/styled";
import { StyledButton, StyledAnchor, StyledLink } from "./style";

export interface ButtonProps
    extends SpaceProps,
        LayoutProps,
        BorderProps,
        TypographyProps {
    /**
     * Required.
     */
    children: React.ReactNode;
    /**
     * Optional. Default is `button`.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Optional. Default is `contained`.
     */
    variant?: "contained" | "outlined" | "texted";
    /**
     * Optional. Default is `primary`.
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
        | "white"
        | "brand2"
        | "facebook"
        | "twitter";
    /**
     * Optional. Default is `md`.
     */
    size?: "xs" | "sm" | "md" | "lg";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "ellipse";
    /**
     * Pass fullwidth to make button fullwidth.
     */
    fullwidth?: boolean;
    /**
     * Pass active to enable active state.
     */
    active?: boolean;
    /**
     * Pass disabled to enable disabled state.
     */
    disabled?: boolean;
    /**
     * Pass iconButton to get Icon Button style.
     */
    iconButton?: boolean;
    /**
     * Pass hasIcon if button has icon with text
     */
    hasIcon?: boolean;
    /**
     * Optional. Pass label if button does not contain any text
     */
    label?: string;
    /**
     * Optional. onClick function
     */
    onClick?: () => void;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
    /**
     * Pass `path` to make link button
     */
    path?: string;
    /**
     * Set icon's position either left or right
     */
    iconPosition?: "left" | "right";
    /**
     * Set icon's size
     */
    iconSize?: "xs" | "sm" | "md";
    /**
     * Set distance between icon and text
     */
    iconSpace?: string;
}

export const Button: FC<ButtonProps> = ({
    children,
    type,
    variant,
    color,
    size,
    shape,
    fullwidth,
    active,
    disabled,
    iconButton,
    hasIcon,
    label,
    onClick,
    className,
    path,
    iconPosition,
    iconSize,
    iconSpace,
    ...restProps
}) => {
    if (path) {
        const internal: boolean = /^\/(?!\/)/.test(path);
        const isHash: boolean = path?.startsWith("#");

        if (internal) {
            return (
                <StyledLink
                    $color={color}
                    $variant={variant}
                    $size={size}
                    $shape={shape}
                    $fullwidth={fullwidth}
                    $active={active}
                    disabled={disabled}
                    $iconButton={iconButton}
                    $hasIcon={hasIcon}
                    $iconPosition={iconPosition}
                    $iconSize={iconSize}
                    $iconSpace={iconSpace}
                    aria-label={label}
                    onClick={onClick}
                    className={classnames(className, "btn")}
                    to={path}
                    {...restProps}
                >
                    {children}
                </StyledLink>
            );
        }
        if (isHash) {
            return (
                <StyledAnchor
                    $color={color}
                    $variant={variant}
                    $size={size}
                    $shape={shape}
                    $fullwidth={fullwidth}
                    $active={active}
                    disabled={disabled}
                    $iconButton={iconButton}
                    $hasIcon={hasIcon}
                    $iconPosition={iconPosition}
                    $iconSize={iconSize}
                    $iconSpace={iconSpace}
                    aria-label={label}
                    onClick={onClick}
                    className={classnames(className, "btn")}
                    href={path}
                    {...restProps}
                >
                    {children}
                </StyledAnchor>
            );
        }
        return (
            <StyledAnchor
                $color={color}
                $variant={variant}
                $size={size}
                $shape={shape}
                $fullwidth={fullwidth}
                $active={active}
                disabled={disabled}
                $iconButton={iconButton}
                $hasIcon={hasIcon}
                $iconPosition={iconPosition}
                $iconSize={iconSize}
                $iconSpace={iconSpace}
                aria-label={label}
                onClick={onClick}
                className={classnames(className, "btn")}
                href={path}
                {...restProps}
            >
                {children}
            </StyledAnchor>
        );
    }

    return (
        <StyledButton
            $color={color}
            $variant={variant}
            $size={size}
            $shape={shape}
            $fullwidth={fullwidth}
            type={type}
            $active={active}
            disabled={disabled}
            $iconButton={iconButton}
            $hasIcon={hasIcon}
            $iconPosition={iconPosition}
            $iconSize={iconSize}
            $iconSpace={iconSpace}
            aria-label={label}
            onClick={onClick}
            className={classnames(className, "btn")}
            {...restProps}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "rounded",
    fullwidth: false,
    active: false,
    disabled: false,
    iconButton: false,
    iconPosition: "left",
    iconSize: "sm",
};

Button.displayName = "Button";
