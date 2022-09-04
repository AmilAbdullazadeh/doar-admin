import { df1, df3 } from "../chart";

const data = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            lineCap: "butt",
            width: 1.5,
        },
        legend: {
            show: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: { show: false },
        fill: {
            opacity: 0.9,
            type: "solid",
            colors: ["#f5f6fa", "#d1e6fa"],
        },
        colors: ["#c0ccda", "#0168fa"],
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

export default data;
