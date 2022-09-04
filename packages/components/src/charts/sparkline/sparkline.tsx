import { FC } from "react";
import {
    Sparklines,
    SparklinesBars,
    SparklinesLine,
    SparklinesSpots,
} from "react-sparklines";

interface Point {
    x: number;
    y: number;
}

interface SparklinesProps {
    data?: number[];
    limit?: number;
    width?: number;
    height?: number;
    svgWidth?: React.SVGAttributes<React.ReactSVGElement>["width"];
    svgHeight?: React.SVGAttributes<React.ReactSVGElement>["height"];
    preserveAspectRatio?: React.SVGAttributes<React.ReactSVGElement>["preserveAspectRatio"];
    margin?: number;
    min?: number;
    max?: number;
    style?: React.SVGAttributes<React.ReactSVGElement>["style"];
}

interface SparklinesBarsProps {
    points?: Point[];
    height?: number;
    style?: React.SVGAttributes<React.ReactSVGElement>["style"];
    barWidth?: number;
    margin?: number;
    onMouseMove?: (
        p: Point,
        event: React.MouseEvent<React.ReactSVGElement>
    ) => void;
}

interface ISparklineProps extends SparklinesProps, SparklinesBarsProps {
    barStyle?: React.SVGAttributes<React.ReactSVGElement>["style"];
    barHeight?: number;
}

interface SparklinesLineProps {
    color?: React.SVGAttributes<React.ReactSVGElement>["color"];
    style?: React.SVGAttributes<React.ReactSVGElement>["style"];
    onMouseMove?: (
        event: "enter" | "click",
        value: number,
        point: Point
    ) => void;
}
interface SparklinesSpotsProps {
    spotSize?: number;
    spotStyle?: React.SVGAttributes<React.ReactSVGElement>["style"];
    spotColors?: { [change: string]: string };
}

interface ISparklineLineProps
    extends SparklinesProps,
        SparklinesLineProps,
        SparklinesSpotsProps {
    color?: React.SVGAttributes<React.ReactSVGElement>["color"];
    lineStyle?: React.SVGAttributes<React.ReactSVGElement>["style"];
    hasSpot?: boolean;
}

export const SparklinesBar: FC<ISparklineProps> = ({
    data,
    limit,
    width,
    height,
    svgWidth,
    svgHeight,
    preserveAspectRatio,
    margin,
    min,
    max,
    style,
    points,
    barStyle,
    barHeight,
    barWidth,
    onMouseMove,
}) => {
    return (
        <Sparklines
            data={data}
            limit={limit}
            width={width}
            height={height}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            preserveAspectRatio={preserveAspectRatio}
            margin={margin}
            min={min}
            max={max}
            style={style}
        >
            <SparklinesBars
                points={points}
                height={barHeight}
                style={barStyle}
                barWidth={barWidth}
                margin={margin}
                onMouseMove={onMouseMove}
            />
        </Sparklines>
    );
};

export const SparklinesLines: FC<ISparklineLineProps> = ({
    data,
    limit,
    width,
    height,
    svgWidth,
    svgHeight,
    preserveAspectRatio,
    margin,
    min,
    max,
    style,
    color,
    lineStyle,
    onMouseMove,
    hasSpot,
    spotSize,
    spotStyle,
    spotColors,
}) => {
    return (
        <Sparklines
            data={data}
            limit={limit}
            width={width}
            height={height}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            preserveAspectRatio={preserveAspectRatio}
            margin={margin}
            min={min}
            max={max}
            style={style}
        >
            <SparklinesLine
                color={color}
                style={lineStyle}
                onMouseMove={onMouseMove}
            />
            {hasSpot ? (
                <SparklinesSpots
                    size={spotSize}
                    style={spotStyle}
                    spotColors={spotColors}
                />
            ) : (
                <SparklinesSpots size={0} />
            )}
        </Sparklines>
    );
};
