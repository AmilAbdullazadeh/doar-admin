import { FC } from "react";
import { Badge, Nav } from "@doar/components";
import { StyledNavLink } from "./style";

const Navbar: FC = () => {
    return (
        <Nav customStyle="line" mb="30px">
            <StyledNavLink active path="#!">
                Followers
                <Badge>340</Badge>
            </StyledNavLink>
            <StyledNavLink path="#!">
                Following <Badge>1,563</Badge>
            </StyledNavLink>
            <StyledNavLink path="#!">
                Request <Badge>19</Badge>
            </StyledNavLink>
        </Nav>
    );
};

export default Navbar;
