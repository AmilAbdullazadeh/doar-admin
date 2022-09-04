/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, forwardRef } from "react";
import { Bar, HorizontalBar, Line, Pie, Doughnut } from "react-chartjs-2";

export interface IBarProps {
    data: {
        labels: string[];
        datasets: Array<{
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number;
    height?: number;
    plugins?: any[];
}

export const BarChart: FC<IBarProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Bar
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export const HorizontalBarChart = forwardRef<any, IBarProps>(
    ({ data, options, width, height, plugins }, ref) => {
        const datasetKeyProvider = () => {
            return Math.random().toString();
        };
        return (
            <HorizontalBar
                data={data}
                options={options}
                width={width}
                height={height}
                datasetKeyProvider={datasetKeyProvider}
                ref={ref}
                plugins={plugins}
            />
        );
    }
);

HorizontalBarChart.displayName = "HorizontalBarChart";

export const LineChart: FC<IBarProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Line
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export const PieChart: FC<IBarProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Pie
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};

export const DonutChart: FC<IBarProps> = ({ data, options, width, height }) => {
    const datasetKeyProvider = () => {
        return Math.random().toString();
    };
    return (
        <Doughnut
            data={data}
            options={options}
            width={width}
            height={height}
            datasetKeyProvider={datasetKeyProvider}
        />
    );
};
