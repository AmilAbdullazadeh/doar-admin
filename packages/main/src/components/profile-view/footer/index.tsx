import { FC } from "react";
import { StyledFooter } from "./style";

const Footer: FC = ({ children }) => {
    return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
