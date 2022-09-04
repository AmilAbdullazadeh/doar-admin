import { FC } from "react";
import { Card, Table } from "@doar/components";
import { StyledTheadTR, StyledTD } from "./style";

const DataTable: FC = () => {
    return (
        <Card>
            <Table bordered>
                <thead>
                    <StyledTheadTR>
                        <th> </th>
                        <th colSpan={3}>Acquisition</th>
                        <th colSpan={3}>Behavior</th>
                        <th colSpan={3}>Conversions</th>
                    </StyledTheadTR>
                    <StyledTheadTR>
                        <th>Source</th>
                        <th>Users</th>
                        <th>New Users</th>
                        <th>Sessions</th>
                        <th>Bounce Rate</th>
                        <th>Pages/Session</th>
                        <th>Avg. Session</th>
                        <th>Transactions</th>
                        <th>Revenue</th>
                        <th>Rate</th>
                    </StyledTheadTR>
                </thead>
                <tbody>
                    <tr>
                        <StyledTD>
                            <a href="#!">Organic search</a>
                        </StyledTD>
                        <StyledTD>
                            <strong>350</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>22</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>5,628</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>25.60%</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>1.92</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>00:01:05</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>340,103</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>$2.65M</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>4.50%</strong>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD>
                            <a href="#!">Social media</a>
                        </StyledTD>
                        <StyledTD>
                            <strong>276</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>18</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>5,100</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>23.66%</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>1.89</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>00:01:03</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>321,960</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>$2.51M</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>4.36%</strong>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD>
                            <a href="#!">Referral</a>
                        </StyledTD>
                        <StyledTD>
                            <strong>246</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>17</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>4,880</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>26.22%</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>1.78</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>00:01:09</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>302,767</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>$2.1M</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>4.34%</strong>
                        </StyledTD>
                    </tr>
                    <tr>
                        <StyledTD>
                            <a href="#!">Email</a>
                        </StyledTD>
                        <StyledTD>
                            <strong>187</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>14</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>4,450</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>24.97%</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>1.35</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>00:02:07</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>279,300</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>$1.86M</strong>
                        </StyledTD>
                        <StyledTD>
                            <strong>3.99%</strong>
                        </StyledTD>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
};

export default DataTable;
