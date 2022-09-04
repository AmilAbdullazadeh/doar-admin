import { flotSampleData1, flotSampleData2 } from "./data";

export const ApexAreaData = {
    options: {
        chart: {
            height: 350,
            type: "area",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            width: 0,
            lineCap: "butt",
        },
        grid: {
            borderColor: "#ddd",
            position: "back",
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        xaxis: {
            type: "numeric",
        },
        yaxis: {
            show: true,
            decimalsInFloat: false,
        },
        colors: ["#0168fa", "#30e3ca"],
        legend: {
            show: false,
        },
        fill: {
            opacity: 0.9,
            type: "solid",
        },
    },
    series: [
        {
            name: "Laptops",
            data: flotSampleData2,
        },
        {
            name: "Desktops",
            data: flotSampleData1,
        },
    ],
};
