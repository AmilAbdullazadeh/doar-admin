import React, { useState } from "react";
import { StyledAlert } from "./style";

export interface AlertProps {
    /**
     * Required. Default is `contained`.
     */
    variant: "contained" | "outlined";
    /**
     * Required. Default is `primary`.
     */
    color:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    /**
     * Required. Default is `false` make it `true` to get solid background.
     */
    solid: boolean;
    /**
     * Required. Default is `false` make it `true` if alert has link.
     */
    hasLink: boolean;
    /**
     * Required. Default is `false` make it `true` to enable dismissible alert.
     */
    isDismissible: boolean;
    /**
     * Required. Default is `false` make it `true` to get css for icon.
     */
    hasIcon: boolean;
}

export const Alert: React.FC<AlertProps> = ({
    children,
    variant,
    color,
    solid,
    hasLink,
    isDismissible,
    hasIcon,
}) => {
    const [show, setShow] = useState(false);
    const dismissHandler = () => {
        setShow(true);
    };
    if (!show) {
        return (
            <StyledAlert
                $variant={variant}
                $color={color}
                $solid={solid}
                $hasLink={hasLink}
                $isDismissible={isDismissible}
                $hasIcon={hasIcon}
                role="alert"
            >
                {children}
                {isDismissible && (
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={dismissHandler}
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                )}
            </StyledAlert>
        );
    }
    return null;
};

Alert.defaultProps = {
    variant: "contained",
    color: "primary",
    solid: false,
    hasLink: false,
    isDismissible: false,
    hasIcon: false,
};
