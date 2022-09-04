export const ApexStackedData = {
    options: {
        chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "30%",
                endingShape: "rounded",
            },
        },
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            offsetX: 0,
        },
        fill: {
            opacity: 1,
        },
        colors: ["#00275e", "#0168fa"],
    },
    series: [
        {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75],
        },
        {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 50],
        },
    ],
};
