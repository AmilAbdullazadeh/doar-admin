const data = {
    options: {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        labels: ["USD", "EUR", "CNY", "GBP", "JPY", "KRW", "SGD"],
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "55%",
                },
            },
        },
        legend: {
            show: false,
        },
        colors: [
            "#66a4fb",
            "#4cebb5",
            "#fec85e",
            "#ff7c8f",
            "#a4e063",
            "#a5d7fd",
            "#b2bece",
        ],
    },
    series: [25, 15, 10, 12, 9, 13, 16],
};

export default data;
