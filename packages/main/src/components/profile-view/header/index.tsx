import { FC } from "react";
import { StyledHeader } from "./style";

const Header: FC = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
