import { FC } from "react";
import { Col } from "@doar/components";
import CryptoChart from "../../../components/dashboard-three/crypto-chart";
import Cryptcurrencies from "../../../components/dashboard-three/cryptocurrencies";

const RowTwo: FC = () => {
    return (
        <>
            <Col lg={9} mt="10px">
                <CryptoChart />
            </Col>
            <Col lg={3} mt="10px">
                <Cryptcurrencies />
            </Col>
        </>
    );
};

export default RowTwo;
