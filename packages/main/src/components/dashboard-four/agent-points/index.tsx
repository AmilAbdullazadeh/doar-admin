import { FC } from "react";
import { Card, CardBody, SectionTitle } from "@doar/components";
import img1 from "@doar/shared/images/img15.jpg";
import img2 from "@doar/shared/images/img14.jpg";
import img3 from "@doar/shared/images/img23.jpg";
import img4 from "@doar/shared/images/img22.jpg";
import Item from "./item";
import { StyledHeader } from "./style";

const AgentPoints: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Agent Performance Points" />
            </StyledHeader>
            <CardBody pt="25px">
                <Item
                    image={img1}
                    name="Katherine Lumaad"
                    designation="Technical Support"
                    points={12312}
                />
                <Item
                    mt="25px"
                    image={img2}
                    name="Adrian Monino"
                    designation="Sales Representative"
                    points={10044}
                />
                <Item
                    mt="25px"
                    image={img3}
                    name="Rolando Paloso"
                    designation="Software Support"
                    points={7500}
                />
                <Item
                    mt="25px"
                    image={img4}
                    name="Dyanne Rose Aceron"
                    designation="Sales Representative"
                    points={6870}
                />
            </CardBody>
        </Card>
    );
};

export default AgentPoints;
