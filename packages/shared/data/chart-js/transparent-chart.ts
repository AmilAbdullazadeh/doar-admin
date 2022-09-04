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
                backgroundColor: "rgba(0,23,55, .5)",
            },
            {
                data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                backgroundColor: "rgba(28,225,172, .5)",
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
                        fontColor: "#182b49",
                        max: 80,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "#182b49",
                    },
                },
            ],
        },
    },
};

export default data;
