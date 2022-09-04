import { FC } from "react";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledProgress, StyledProgressBar } from "./style";

export interface IProps extends SpaceProps {
    /**
     * Extra Class Name
     */
    className?: string;
    /**
     * Current value of progress
     */
    now: number;
    /**
     * Minimum value progress can begin from
     */
    min?: number;
    /**
     * Maximum value progress can reach
     */
    max?: number;
    /**
     * Show label that represents visual percentage. EG. 60%
     */
    isLabel?: boolean;
    /**
     * Progress Bar Background Color.
     */
    bg?: string;
    /**
     * Progress Bar Height
     */
    height?: string;
    /**
     * Uses a gradient to create a striped effect.
     */
    striped?: boolean;
    /**
     * Animate's the stripes from right to left
     */
    animated?: boolean;
    /**
     * Pass opacity of progress bar
     */
    opacity?: number;
}

export const Progress: FC<IProps> = ({
    className,
    now,
    min,
    max,
    isLabel,
    bg,
    height,
    striped,
    animated,
    opacity,
    ...restProps
}) => {
    return (
        <StyledProgress
            className={classnames(className)}
            $height={height}
            $opacity={opacity}
            {...restProps}
        >
            <StyledProgressBar
                role="progressbar"
                aria-valuenow={now}
                aria-valuemin={min}
                aria-valuemax={max}
                bg={bg}
                $width={now}
                $striped={striped}
                $animated={animated}
            >
                <span className={!isLabel ? "sr-only" : ""}>{now}%</span>
            </StyledProgressBar>
        </StyledProgress>
    );
};

Progress.defaultProps = {
    now: 40,
    min: 0,
    max: 100,
    bg: "primary",
    height: "10px",
    striped: false,
    animated: false,
};
