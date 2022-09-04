import { IRadial } from "../../types";

const chartOptions = {
    chart: {
        sparkline: {
            enabled: true,
        },
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: "65%",
            },
            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: 20,
                    show: true,
                    color: "#8392a5",
                    fontSize: "9px",
                },
                value: {
                    offsetY: -10,
                    color: "#001737",
                    fontSize: "1.53125rem",
                    show: true,
                },
            },
        },
    },
    labels: ["Reached"],
    responsive: [
        {
            breakpoint: "576px",
            options: {
                chart: {
                    offsetX: -78,
                },
            },
        },
    ],
};

const chart1 = {
    series: [86],
    options: {
        ...chartOptions,
        colors: ["#65e0e0"],
    },
};

const chart2 = {
    series: [69],
    options: {
        ...chartOptions,
        colors: ["#69b2f8"],
    },
};

const RadialData: IRadial[] = [
    {
        id: 1,
        title: "Time to Resolved Complaint",
        desc: "The average time taken to resolve complaints.",
        min: "7m:32s",
        sec: "Goal: 8m:0s",
        chart: chart1,
    },
    {
        id: 2,
        title: "Average Speed of Answer",
        desc: "Measure how quickly support staff answer incoming calls.",
        min: "0m:20s",
        sec: "Goal: 0m:10s",
        chart: chart2,
    },
];
export default RadialData;
