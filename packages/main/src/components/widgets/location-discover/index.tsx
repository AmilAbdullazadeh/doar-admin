import { FC } from "react";
import { Badge, Nav, NavLink } from "@doar/components";
import WidgetTitle from "../widget-title";

const LocationDiscover: FC = () => {
    return (
        <>
            <WidgetTitle title="Discover By Location" />
            <Nav customStyle="classic">
                <NavLink path="#!">
                    <span>San Francisco, California</span>
                    <Badge variant="texted">20</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Los Angeles, California</span>
                    <Badge variant="texted">18</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Las Vegas, Nevada</span>
                    <Badge variant="texted">14</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Austin, Texas</span>
                    <Badge variant="texted">12</Badge>
                </NavLink>
                <NavLink path="#!">
                    <span>Arlington, Nebraska</span>
                    <Badge variant="texted">10</Badge>
                </NavLink>
            </Nav>
        </>
    );
};

export default LocationDiscover;
