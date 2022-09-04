import { flotSampleData1, flotSampleData2 } from "./data";

export const ApexLineData = {
    options: {
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            area: {
                fillTo: "origin",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            width: 2,
            lineCap: "butt",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            type: "numeric",
        },
        yaxis: {
            show: true,
            decimalsInFloat: false,
        },
        colors: ["#00275e", "#0168fa"],
    },
    series: [
        {
            name: "Desktops",
            data: flotSampleData1,
        },
        {
            name: "Laptops",
            data: flotSampleData2,
        },
    ],
};
