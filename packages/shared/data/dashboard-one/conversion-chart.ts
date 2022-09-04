/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const randomizeArray = (arg: string[] | any[]) => {
    const args = arg.slice();
    let currentIndex = args.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = args[currentIndex];
        args[currentIndex] = args[randomIndex];
        args[randomIndex] = temporaryValue;
    }

    return args;
};

const sparklineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46,
];

const commonOptions = {
    tooltip: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    fill: {
        opacity: 1,
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        show: false,
    },
    colors: ["#DCE6EC"],
    title: {
        text: undefined,
    },
    subtitle: {
        text: undefined,
    },
};

export const conversionChart1 = {
    options: {
        chart: {
            id: "sparkline1",
            sparkline: {
                enabled: true,
            },
        },
        ...commonOptions,
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    },
    series: [
        {
            name: "Conversions",
            data: randomizeArray(sparklineData),
        },
    ],
};

export const conversionChart2 = {
    options: {
        chart: {
            id: "sparkline2",
            sparkline: {
                enabled: true,
            },
        },
        ...commonOptions,
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    },
    series: [
        {
            name: "Purchases",
            data: randomizeArray(sparklineData),
        },
    ],
};

export const conversionChart3 = {
    options: {
        chart: {
            id: "sparkline3",
            sparkline: {
                enabled: true,
            },
        },
        ...commonOptions,
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    },
    series: [
        {
            name: "Values",
            data: randomizeArray(sparklineData),
        },
    ],
};

export const conversionChart4 = {
    options: {
        chart: {
            id: "sparkline4",
            sparkline: {
                enabled: true,
            },
        },
        ...commonOptions,
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
    },
    series: [
        {
            name: "Quantities",
            data: randomizeArray(sparklineData),
        },
    ],
};
