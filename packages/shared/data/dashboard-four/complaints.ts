import { df3 } from "../chart";

const data = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            width: 1.5,
            lineCap: "butt",
        },
        grid: {
            borderColor: "#c0ccda",
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            type: "numeric",
            labels: {
                offsetY: -15,
                offsetX: -5,
                style: {
                    colors: "#8392a5",
                    fontWeight: 400,
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tickAmount: 11,
            tickPlacement: "between",
            min: 45,
            max: 100,
            floating: true,
            position: "bottom",
        },
        yaxis: {
            show: false,
            min: 0,
            max: 55,
        },
        colors: ["#0168fa"],
        legend: {
            show: false,
        },
        fill: {
            opacity: 0.05,
            colors: ["#0168fa"],
            type: "solid",
        },
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df3,
        },
    ],
};

export default data;
