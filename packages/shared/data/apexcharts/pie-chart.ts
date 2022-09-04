export const ApexPieData = {
    options: {
        labels: ["Series A", "Series B", "Series C", "Series D", "Series E"],
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
        colors: ["#6610f2", "#007bff", "#85d00b", "#00cccc", "#00275e"],
    },
    series: [44, 55, 13, 43, 22],
};
