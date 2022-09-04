import { df3, df1 } from "../chart";

export const Chart1 = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 1],
        },
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            min: 0,
            max: 50,
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                gradientToColors: ["#a0aabc", "#c0ccda"],
                opacityFrom: 0.4,
                opacityTo: 0,
            },
        },
        colors: ["#a0aabc", "#c0ccda"],
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df1,
        },
        {
            data: df3,
        },
    ],
};

export const Chart2 = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 1],
        },
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            min: 20,
            max: 70,
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                gradientToColors: ["#58cd8b", "#b8eace"],
                opacityFrom: 0.4,
                opacityTo: 0,
            },
        },
        colors: ["#58cd8b", "#b8eace"],
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df1,
        },
        {
            data: df3,
        },
    ],
};

export const Chart3 = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 1],
        },
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            min: 90,
            max: 140,
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                gradientToColors: ["#6e8ab6", "#c0ccdf"],
                opacityFrom: 0.4,
                opacityTo: 0,
            },
        },
        colors: ["#6e8ab6", "#c0ccdf"],
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df1,
        },
        {
            data: df3,
        },
    ],
};

export const Chart4 = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 1],
        },
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            min: 80,
            max: 130,
        },
        yaxis: {
            show: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                gradientToColors: ["#4c94fb", "#b1d0fd"],
                opacityFrom: 0.4,
                opacityTo: 0,
            },
        },
        colors: ["#4c94fb", "#b1d0fd"],
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df1,
        },
        {
            data: df3,
        },
    ],
};
