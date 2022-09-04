import { ITransaction } from "../../types";

export const transaction: ITransaction[] = [
    {
        id: "trans-1",
        title: "Payment from #10322",
        date: "Mar 21, 2019, 3:30pm",
        count: "$250.00",
        status: "success",
        state: "completed",
    },
    {
        id: "trans-2",
        title: "Process refund to #00910",
        date: "Mar 21, 2019, 1:00pm",
        count: "$16.50",
        status: "success",
        state: "refund",
    },
    {
        id: "trans-3",
        title: "Process delivery to #44333",
        date: "Mar 20, 2019, 11:40am",
        count: "3 Items",
        status: "pending",
        state: "deilvered",
    },
    {
        id: "trans-4",
        title: "Payment from #10322",
        date: "Mar 21, 2019, 3:30pm",
        count: "$129.50",
        status: "success",
        state: "completed",
    },
    {
        id: "trans-5",
        title: "Payment failed from #087651",
        date: "Mar 19, 2019, 12:54pm",
        count: "$150.00",
        status: "declined",
        state: "failed",
    },
];
