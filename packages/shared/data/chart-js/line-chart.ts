const data = {
    data: {
        labels: [
            "Jan",
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
        datasets: [
            {
                data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                borderColor: "#001737",
                borderWidth: 1,
                fill: false,
            },
            {
                data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                borderColor: "#1ce1ac",
                borderWidth: 1,
                fill: false,
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                display: false,
            },
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: "#e5e9f2",
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                    },
                },
            ],
        },
    },
};

export default data;
