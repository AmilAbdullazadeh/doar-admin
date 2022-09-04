import { FC } from "react";
import { Col } from "@doar/components";
import Transactions from "../../../components/dashboard-three/transactions";
import PriceIndexes from "../../../components/dashboard-three/price-indexes";
import BTCWallet from "../../../components/dashboard-three/btc-wallet";

const RowFour: FC = () => {
    return (
        <>
            <Col sm={6} lg={4} mt="10px">
                <Transactions />
            </Col>
            <Col sm={6} lg={4} mt="10px">
                <PriceIndexes />
            </Col>
            <Col sm={6} lg={4} mt="10px">
                <BTCWallet />
            </Col>
        </>
    );
};

export default RowFour;
