import { IWatchlist } from "../../types";
import { Chart1, Chart2, Chart3, Chart4 } from "./watchlist-charts";

const data: IWatchlist[] = [
    {
        id: 1,
        color: "secondary",
        icon: "cf cf-eth",
        title: "Ethereum",
        subtitle: "ETH",
        coin: "$136.99",
        coinRate: "0.77%",
        coinStatus: "down",
        markets: [12, 81],
        chart: Chart1,
    },
    {
        id: 2,
        color: "success",
        icon: "fab fa-bitcoin",
        title: "Bitcoin Cash",
        subtitle: "BCH",
        coin: "$160.43",
        coinRate: " 4.34%",
        coinStatus: "up",
        markets: [11, 74],
        chart: Chart2,
    },
    {
        id: 3,
        color: "litecoin",
        icon: "cf cf-ltc",
        title: "Litecoin",
        subtitle: "LTC",
        coin: "$58.91",
        coinRate: "2.17%",
        coinStatus: "down",
        markets: [6, 42],
        chart: Chart3,
    },
    {
        id: 4,
        color: "primary",
        icon: "cf cf-dash",
        title: "Dash",
        subtitle: "DASH",
        coin: "$90.53",
        coinRate: "0.80%",
        coinStatus: "down",
        markets: [6, 31],
        chart: Chart4,
    },
];

export default data;
