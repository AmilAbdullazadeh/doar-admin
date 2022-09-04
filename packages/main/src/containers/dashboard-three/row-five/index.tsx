import { FC } from "react";
import { Col } from "@doar/components";
import BTCVolume from "../../../components/dashboard-three/btc-volume";
import LatestNews from "../../../components/dashboard-three/latest-news";
import Portfolio from "../../../components/dashboard-three/portfolio";

const RowFive: FC = () => {
    return (
        <>
            <Col sm={6} lg={5} xl={3} mt="10px">
                <BTCVolume />
            </Col>
            <Col sm={6} lg={7} xl mt="10px" mdOrder={1} lgOrder={0}>
                <LatestNews />
            </Col>
            <Col sm={6} lg={5} xl={4} mt="10px">
                <Portfolio />
            </Col>
        </>
    );
};

export default RowFive;
