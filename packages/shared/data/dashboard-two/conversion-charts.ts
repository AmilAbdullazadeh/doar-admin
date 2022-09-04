import { df3data1, df3data2, df3data3, df3data4 } from "../chart";

const commonOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        stacked: true,
        offsetX: 0,
        offsetY: 0,
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "60%",
            endingShape: "rounded",
        },
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
        opacity: 1,
    },
    tooltip: {
        enabled: false,
    },
};

export const conversionChart1 = {
    options: {
        ...commonOptions,
        colors: ["#66a4fb", "#e5e9f2"],
    },
    series: [
        {
            data: df3data1,
        },
        {
            data: df3data2,
        },
    ],
};

export const conversionChart2 = {
    options: {
        ...commonOptions,
        colors: ["#7ee5e5", "#e5e9f2"],
    },
    series: [
        {
            data: df3data1,
        },
        {
            data: df3data3,
        },
    ],
};

export const conversionChart3 = {
    options: {
        ...commonOptions,
        colors: ["#f77eb9", "#e5e9f2"],
    },
    series: [
        {
            data: df3data1,
        },
        {
            data: df3data4,
        },
    ],
};
