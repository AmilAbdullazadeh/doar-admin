const data = {
    data: {
        labels: ["6am", "10am", "1pm", "4pm", "7pm", "10pm"],
        datasets: [
            {
                data: [20, 60, 50, 45, 50, 60],
                backgroundColor: "#69b2f8",
                lebel: "today",
            },
            {
                data: [10, 40, 30, 40, 55, 25],
                backgroundColor: "#d1e6fa",
                lebel: "yesterday",
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
                        display: false,
                        beginAtZero: true,
                        fontSize: 10,
                        fontColor: "#182b49",
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: true,
                        color: "#eceef4",
                    },
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        fontColor: "#8392a5",
                        max: 80,
                    },
                },
            ],
        },
    },
};

export default data;
