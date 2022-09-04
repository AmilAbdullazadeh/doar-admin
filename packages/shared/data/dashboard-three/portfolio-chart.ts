import { df3, df1 } from "../chart";

const data = {
    series: [
        {
            data: df3,
        },
        {
            data: df1,
        },
    ],
    options: {
        chart: {
            stacked: true,
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#00cccc", "#e1e5ed"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: [1.7, 1],
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 1,
                gradientToColors: ["#e1e5ed", "#00cccc"],
                inverseColors: false,
                opacityFrom: 0.4,
                opacityTo: 0.2,
            },
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false,
            },
            axisTicks: {
                show: false,
            },
            tickPlacement: "on",
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: "#485e9029",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
    },
};

export default data;
