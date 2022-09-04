const data = {
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                data: [20, 20, 30, 5, 25],
                backgroundColor: [
                    "#560bd0",
                    "#007bff",
                    "#00cccc",
                    "#cbe0e3",
                    "#74de00",
                ],
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    },
};

export default data;
