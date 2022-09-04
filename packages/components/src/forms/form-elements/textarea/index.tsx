import { forwardRef } from "react";
import classnames from "classnames";
import { StyledTextarea } from "./style";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, IProps>(
    (
        {
            className,
            rows,
            disabled,
            state,
            feedbackText,
            id,
            name,
            placeholder,
            value,
            showState,
            showErrorOnly,
            onChange,
            onClick,
            onBlur,
            width,
            height,
            customStyle,
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <StyledTextarea
                    disabled={disabled}
                    className={classnames(className, "form-control")}
                    rows={rows}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    ref={ref}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    $state={state}
                    $showState={showState}
                    $showErrorOnly={showErrorOnly}
                    $width={width}
                    $height={height}
                    $customStyle={customStyle}
                    {...restProps}
                />
                {feedbackText && showState && (
                    <Feedback
                        state={state}
                        showState={showState}
                        showErrorOnly={showErrorOnly}
                    >
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Textarea.displayName = "Textarea";

Textarea.defaultProps = {
    rows: 2,
    showErrorOnly: true,
};
