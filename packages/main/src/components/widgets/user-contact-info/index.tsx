import { FC } from "react";
import { Briefcase, Home, Smartphone, Phone, Mail } from "react-feather";
import { Anchor } from "@doar/components";
import WidgetTitle from "../widget-title-2";
import { StyledItem, StyledSpan } from "./style";

const UserContactInfo: FC = () => {
    return (
        <>
            <WidgetTitle>Contact Information</WidgetTitle>
            <ul>
                <StyledItem>
                    <Briefcase width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Bay Area, San Francisco, CA</StyledSpan>
                </StyledItem>
                <StyledItem>
                    <Home width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Westfield, Oakland, CA</StyledSpan>
                </StyledItem>
                <StyledItem>
                    <Smartphone width={18} height={18} strokeWidth="2.3px" />
                    <Anchor variant="link2" path="#!">
                        (+1) 012 345 6789
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <Phone width={18} height={18} strokeWidth="2.3px" />
                    <Anchor variant="link2" path="#!">
                        (+1) 987 654 3201
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <Mail width={18} height={18} strokeWidth="2.3px" />
                    <Anchor variant="link2" path="#!">
                        me@fenchiumao.me
                    </Anchor>
                </StyledItem>
            </ul>
        </>
    );
};

export default UserContactInfo;
