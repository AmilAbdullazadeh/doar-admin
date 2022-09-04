import { generateDayWiseTimeSeries } from "../../methods";

export const RevenueChart = {
    series: [
        {
            name: "Growth Actual",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
        {
            name: "Actual",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 20,
                }
            ),
        },
        {
            name: "Plan",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 15,
                }
            ),
        },
    ],
    options: {
        chart: {
            type: "area",
            stacked: true,
            id: "revenue-growth",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#69b2f8", "#00E396", "#d1e6fa"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 1,
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
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
            labels: {
                style: {
                    fontSize: "9px",
                    fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Inter UI', Roboto, sans-serif",
                },
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: "#ffffff",
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
            column: {
                colors: "#ffffff",
                opacity: 1,
            },
        },
        tooltip: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 575,
                options: {
                    chart: {
                        height: 200,
                    },
                    xaxis: {
                        show: false,
                    },
                },
            },
        ],
    },
};
