import { forwardRef } from "react";
import classnames from "classnames";
import { StyledCheckbox, StyledCheckboxLabel } from "./style";
import { StyledBoxWrap } from "../style";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    checked?: boolean;
    label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className,
            disabled,
            feedbackText,
            id,
            name,
            label,
            state,
            checked,
            onChange,
            onClick,
            onBlur,
            value,
            ...restProps
        },
        ref
    ) => {
        return (
            <StyledBoxWrap
                className={classnames(className, "custom-checkbox")}
                {...restProps}
            >
                <StyledCheckbox
                    type="checkbox"
                    disabled={disabled}
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                />
                <StyledCheckboxLabel htmlFor={id}>{label}</StyledCheckboxLabel>
                {feedbackText && (
                    <Feedback state={state}>{feedbackText}</Feedback>
                )}
            </StyledBoxWrap>
        );
    }
);

Checkbox.displayName = "Checkbox";
