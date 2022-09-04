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
                backgroundColor: "#001737",
            },
            {
                data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                backgroundColor: "#1ce1ac",
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            labels: {
                display: false,
            },
        },
        scales: {
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        color: "#e5e9f2",
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        fontColor: "#182b49",
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
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
