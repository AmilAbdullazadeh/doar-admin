import { df1, df2, df3 } from "../chart";

const data = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            offsetX: 0,
            offsetY: 0,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            lineCap: "butt",
            width: 1.5,
        },
        plotOptions: {
            bar: {
                columnWidth: "60%",
                barHeight: "70%",
            },
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: "numeric",
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tickAmount: 7,
            tickPlacement: "between",
            min: 40,
            max: 80,
            labels: {
                style: {
                    fontSize: "10px",
                },
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
        grid: {
            show: true,
            borderColor: "#e5e9f2",
            strokeDashArray: 0,
            position: "back",
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
        fill: {
            colors: ["#66a4fb", "#ffffff", "#e3e7ed"],
            opacity: [0.03, 0, 1],
            type: "solid",
        },
        colors: ["#66a4fb", "#00cccc", "#e3e7ed"],
        tooltip: {
            enabled: false,
        },
    },
    series: [
        {
            data: df2,
            type: "area",
        },
        {
            data: df1,
            type: "area",
        },
        {
            data: df3,
            type: "bar",
        },
    ],
};

export default data;
