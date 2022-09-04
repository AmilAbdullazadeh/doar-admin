import { FC } from "react";
import { Row, Col } from "@doar/components";
import BilledBox from "../../../components/invoice/billed-box";
import InvoiceNumb from "../../../components/invoice/invoice-numb";
import InvoiceInfo from "../../../components/invoice/invoice-info";

const RowOne: FC = () => {
    return (
        <Row>
            <Col sm={6}>
                <BilledBox
                    label="Billed From"
                    heading="Company, Inc."
                    address="201 Something St., Something Town, YT 242, Country 6546"
                    telephone="324 445-4544"
                    email="youremail@companyname.com"
                />
            </Col>
            <Col
                col={12}
                md={6}
                textAlign={[null, null, "right"]}
                order="first"
                mdOrder={2}
                mb={["20px"]}
            >
                <InvoiceNumb label="Invoice Number" invoice="#DF032AZ00022" />
            </Col>
            <Col sm={6} lg={8} mt={["40px", 0, "40px"]} mdOrder={3}>
                <BilledBox
                    label="Billed To"
                    heading="Juan Dela Cruz"
                    address="4033 Patterson Road, Staten Island, NY 10301"
                    telephone="324 445-4544"
                    email="youremail@companyname.com"
                />
            </Col>
            <Col sm={6} lg={4} mt="40px" mdOrder={4}>
                <InvoiceInfo
                    label="Invoice Information"
                    list={[
                        { key: "Invoice Number", value: "DF032AZ00022" },
                        { key: "Product ID", value: "32334300" },
                        { key: "Issue Date", value: "January 20, 2019" },
                        { key: "Due Date", value: "April 21, 2019" },
                    ]}
                />
            </Col>
        </Row>
    );
};

export default RowOne;
