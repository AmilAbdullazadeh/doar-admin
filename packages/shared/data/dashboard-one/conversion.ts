import { IConversion } from "../../types";
import {
    conversionChart1,
    conversionChart2,
    conversionChart3,
    conversionChart4,
} from "./conversion-chart";

export const conversions: IConversion[] = [
    {
        id: 1,
        title: "Conversion Rate",
        rate: "0.81%",
        change: {
            percentage: "1.2%",
            growth: "up",
            time: "than last week",
        },
        chart: conversionChart1,
    },
    {
        id: 2,
        title: "Unique Purchases",
        rate: "3,137",
        change: {
            percentage: "0.7%",
            growth: "down",
            time: "than last week",
        },
        chart: conversionChart2,
    },
    {
        id: 3,
        title: "Avg. Order Value",
        rate: "$306.20",
        change: {
            percentage: "0.3%",
            growth: "down",
            time: "than last week",
        },
        chart: conversionChart3,
    },
    {
        id: 4,
        title: "Order Quantity",
        rate: "1,650",
        change: {
            percentage: "2.1%",
            growth: "up",
            time: "than last week",
        },
        chart: conversionChart4,
    },
];
