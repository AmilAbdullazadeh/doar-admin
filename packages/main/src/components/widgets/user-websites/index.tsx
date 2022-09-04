import { FC } from "react";
import { Globe, GitHub, Twitter, Instagram, Facebook } from "react-feather";
import { Anchor } from "@doar/components";
import WidgetTitle from "../widget-title-2";
import { StyledItem } from "./style";

const UserWebsites: FC = () => {
    return (
        <>
            <WidgetTitle>Websites &amp; Social Channel</WidgetTitle>
            <ul>
                <StyledItem>
                    <Globe width={18} height={18} strokeWidth="2.3px" />
                    <Anchor color="text2" path="#!">
                        http://fenchiumao.me/
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <GitHub width={18} height={18} strokeWidth="2.3px" />
                    <Anchor color="text2" path="#!">
                        @fenchiumao
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <Twitter width={18} height={18} strokeWidth="2.3px" />
                    <Anchor color="text2" path="#!">
                        @fenmao
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <Instagram width={18} height={18} strokeWidth="2.3px" />
                    <Anchor color="text2" path="#!">
                        @fenchiumao
                    </Anchor>
                </StyledItem>
                <StyledItem>
                    <Facebook width={18} height={18} strokeWidth="2.3px" />
                    <Anchor color="text2" path="#!">
                        @fenchiumao
                    </Anchor>
                </StyledItem>
            </ul>
        </>
    );
};

export default UserWebsites;
