import { flotSampleData3 } from "./data";

export const ApexThresholdsData = {
    options: {
        chart: {
            height: 350,
            type: "bar",
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: "#0168fa",
                        },
                        {
                            from: -45,
                            to: 0,
                            color: "#d0d6dd",
                        },
                    ],
                },
                columnWidth: "80%",
            },
        },
        dataLabels: {
            enabled: false,
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
    },
    series: [
        {
            name: "Laptops",
            data: flotSampleData3,
        },
    ],
};
