const data = {
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [20, 60, 50, 45, 50, 60],
                backgroundColor: "#001737",
            },
            {
                data: [10, 40, 30, 40, 60, 55],
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
                    gridLines: {
                        display: false,
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
                    gridLines: {
                        color: "#e5e9f2",
                    },
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "#182b49",
                        max: 100,
                    },
                },
            ],
        },
    },
};

export default data;
