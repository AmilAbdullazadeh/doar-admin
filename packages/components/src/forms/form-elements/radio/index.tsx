import { forwardRef } from "react";
import classnames from "classnames";
import { StyledRadio, StyledRadioLabel } from "./style";
import { StyledBoxWrap } from "../style";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    checked?: boolean;
    label: string;
}

export const Radio = forwardRef<HTMLInputElement, IProps>(
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
                className={classnames(className, "custom-radio")}
                {...restProps}
            >
                <StyledRadio
                    type="radio"
                    disabled={disabled}
                    id={id}
                    name={name}
                    checked={checked}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    ref={ref}
                />
                <StyledRadioLabel htmlFor={id}>{label}</StyledRadioLabel>
                {feedbackText && (
                    <Feedback state={state}>{feedbackText}</Feedback>
                )}
            </StyledBoxWrap>
        );
    }
);

Radio.displayName = "Radio";
