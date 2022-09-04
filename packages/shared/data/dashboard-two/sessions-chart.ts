const data = {
    options: {
        labels: ["Organic Search", "Email", "Referral", "Social Media"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "50%",
                },
            },
        },
        colors: ["#f77eb9", "#7ebcff", "#7ee5e5", "#fdbd88"],
        stroke: {
            colors: ["#fff"],
        },
    },
    series: [20, 20, 30, 25],
};

export default data;
