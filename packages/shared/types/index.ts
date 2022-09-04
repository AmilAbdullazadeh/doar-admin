import { FC, SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
}

export interface ISubmenu {
    id: number;
    label: string;
    url: string;
    Icon?: FC<IconProps> | undefined;
}

export interface IMegamenu {
    id: number;
    title: string;
    submenu: ISubmenu[];
}


export interface IMenu {
    id: number;
    label: string;
    url: string;
    Icon?: FC<IconProps> | undefined;
    submenu?: ISubmenu[];
    megamenu?: IMegamenu[];

}

export interface IChart {
    options: {
        [x: string]: unknown;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    series: any[];
}

export interface IConversion {
    id: number;
    title: string;
    rate: string;
    change: {
        percentage: string;
        growth: "up" | "down";
        time: string;
    };
    chart?: IChart;
}

export interface IWatchlist {
    id: number;
    icon: string;
    title: string;
    subtitle?: string;
    coin: string;
    coinRate: string;
    coinStatus: "up" | "down";
    color?: string;
    markets?: number[];
    chart?: IChart;
}

export interface IRadial {
    id: number;
    title: string;
    desc: string;
    min: string;
    sec: string;
    chart: IChart;
}

export interface IEvent {
    category:
    | "calendar"
    | "birthday"
    | "holiday"
    | "discover"
    | "meetup"
    | "other";
    backgroundColor: string;
    borderColor: string;
    events: Array<{
        id: string;
        start: string;
        end: string;
        title: string;
        description?: string;
    }>;
}

export interface ITransaction {
    id: string;
    title: string;
    date: string;
    count: string;
    status: "success" | "declined" | "pending";
    state: "completed" | "refund" | "deilvered" | "failed";
}

export interface ICustomer {
    id: string;
    name: string;
    image?: string;
    bg?: string;
    chat_link: string;
    profile_link: string;
}

export interface ISalesRevenue {
    state: string;
    order: string;
    earning: string;
}

export interface IRecentEarning {
    date: string;
    sales_count: string;
    gross_earnings: string;
    tax_withheld: string;
    net_earinings: {
        earning: string;
        growth: string;
        status: "up" | "down";
    };
}

export type TTheme = "classic" | "light" | "cool" | "dark";
