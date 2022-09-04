const data = {
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "75%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 7,
            colors: ["transparent"],
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
            tickAmount: 6,
            min: 0,
            max: 200,
            forceNiceScale: true,
            labels: {
                style: {
                    colors: ["#8392a5"],
                    fontSize: "10px",
                },
            },
        },
        fill: {
            opacity: 1,
        },
        colors: ["#66a4fb", "#65e0e0"],
        grid: {
            show: true,
            borderColor: "#ebeef3",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        responsive: [
            {
                breakpoint: 1199,
                options: {
                    stroke: {
                        width: 3,
                    },
                },
            },
            {
                breakpoint: 575,
                options: {
                    stroke: {
                        width: 3,
                    },
                },
            },
        ],
    },
    series: [
        {
            data: [150, 110, 90, 115, 125, 160, 160, 140, 100, 110, 120, 120],
        },
        {
            data: [180, 140, 120, 135, 155, 170, 180, 150, 140, 150, 130, 130],
        },
    ],
};

export default data;
