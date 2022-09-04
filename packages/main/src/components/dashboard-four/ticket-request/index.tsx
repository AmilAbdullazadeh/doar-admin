import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    HorizontalBarChart,
} from "@doar/components";
import { ticketRequestChart } from "@doar/shared/data/dashboard-four";
import { useAppSelector } from "../../../redux/hooks";
import { StyledHeader, StyledChart } from "./style";

const TicketRequest: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = ticketRequestChart.options;
    const darkChartOptions = {
        ...chartOptions,
        scales: {
            xAxes: [
                {
                    ...chartOptions.scales.xAxes[0],
                    gridLines: {
                        color: "rgba(255,255,255,.04)",
                    },
                    ticks: {
                        ...chartOptions.scales.xAxes[0].ticks,
                        fontColor: "#97a3b9",
                    },
                },
            ],
            yAxes: [
                {
                    ...chartOptions.scales.yAxes[0],
                    ticks: {
                        ...chartOptions.scales.yAxes[0].ticks,
                        fontColor: "#97a3b9",
                    },
                },
            ],
        },
    };

    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Tickets By Request Type" />
            </StyledHeader>
            <CardBody>
                <StyledChart>
                    <HorizontalBarChart
                        data={ticketRequestChart.data}
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        width={395}
                        height={260}
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default TicketRequest;
