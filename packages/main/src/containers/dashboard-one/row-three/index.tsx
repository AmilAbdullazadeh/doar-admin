import { FC } from "react";
import { Col } from "@doar/components";
import SalesRevenue from "../../../components/dashboard-one/sales-revenue";
import RecentEarnings from "../../../components/dashboard-one/recent-earnings";
import CSVDownload from "../../../components/dashboard-one/csv-download";

const RowThree: FC = () => {
    return (
        <>
            <Col xl={4} md={6} mt="10px" mdOrder={1} xlOrder={0}>
                <SalesRevenue />
            </Col>
            <Col xl={8} lg={12} mt="10px">
                <RecentEarnings />
                <CSVDownload />
            </Col>
        </>
    );
};

export default RowThree;
