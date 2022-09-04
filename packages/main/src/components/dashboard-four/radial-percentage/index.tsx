import { FC } from "react";
import {
    Card,
    CardBody,
    Media,
    MediaBody,
    ApexRadialChart,
} from "@doar/components";
import { IRadial } from "@doar/shared/types";
import {
    StyledChart,
    StyledTitle,
    StyledDesc,
    StyledMinutes,
    StyledSec,
} from "./style";

type IProps = Omit<IRadial, "id">;

const RadialPercentage: FC<IProps> = ({ title, desc, min, sec, chart }) => {
    return (
        <Card>
            <CardBody position="relative">
                <Media display={["block", "flex"]} alignItems="center">
                    <StyledChart>
                        <ApexRadialChart
                            options={chart.options}
                            series={chart.series}
                            width="100%"
                            height={140}
                        />
                    </StyledChart>
                    <MediaBody mt={["20px", 0]}>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDesc>{desc}</StyledDesc>
                        <StyledMinutes>
                            {min} <StyledSec>/ {sec}</StyledSec>
                        </StyledMinutes>
                    </MediaBody>
                </Media>
            </CardBody>
        </Card>
    );
};

export default RadialPercentage;
