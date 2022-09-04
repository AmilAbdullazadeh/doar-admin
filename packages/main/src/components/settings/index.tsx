import { FC, useState } from "react";
import { Settings } from "react-feather";
import { Row, Col } from "@doar/components";
import { TTheme } from "@doar/shared/types";
import { SkinModes } from "./data";
import Mode from "./mode";
import {
    StyledSettings,
    StyledSettingsBtn,
    StyledSettingsBody,
    StyledCard,
    StyledLogo,
    StyledNote,
    StyledLabel,
} from "./style";

interface IProps {
    themeHandler: (el: TTheme) => void;
    curTheme: TTheme;
}

const SettingsCard: FC<IProps> = ({ themeHandler, curTheme }) => {
    const [show, setShow] = useState(false);

    return (
        <StyledSettings $show={show}>
            <StyledSettingsBtn
                $show={show}
                onClick={() => setShow((prev) => !prev)}
            >
                <Settings width={20} height={20} />
            </StyledSettingsBtn>
            <StyledSettingsBody>
                <StyledCard>
                    <StyledLogo>
                        do<span>ar</span>
                    </StyledLogo>
                    <StyledNote>Template Skin Customizer</StyledNote>
                </StyledCard>

                <StyledCard $hasBorder>
                    <StyledLabel>Skin Mode</StyledLabel>
                    <Row gutters={10}>
                        {SkinModes.map((el, i) => (
                            <Col xs={4} sm={4} key={el} mt={i > 2 ? "10px" : 0}>
                                <Mode
                                    mode={el}
                                    onClick={() => themeHandler(el)}
                                    active={curTheme === el}
                                />
                            </Col>
                        ))}
                    </Row>
                </StyledCard>

                <div className="pd-y-20 bd-t" style={{ display: "none" }}>
                    <h4 className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">
                        Navigation Skin
                    </h4>
                    <div className="row row-xs">
                        <div className="col-4">
                            <a
                                href="/"
                                className="df-skin df-skin-default active"
                                data-title="default"
                            >
                                df
                            </a>
                            <span className="df-skin-name">Default</span>
                        </div>
                        <div className="col-4">
                            <a
                                href="/"
                                className="df-skin df-skin-deepblue"
                                data-title="deepblue"
                            >
                                <span />
                                <span />
                            </a>
                            <span className="df-skin-name">Deep Blue</span>
                        </div>
                        <div className="col-4">
                            <a
                                href="/"
                                className="df-skin df-skin-charcoal"
                                data-title="charcoal"
                            >
                                <span />
                                <span />
                            </a>
                            <span className="df-skin-name">Charcoal</span>
                        </div>
                        <div className="col-4 mg-t-15">
                            <a
                                href="/"
                                className="df-skin df-skin-gradient1"
                                data-title="gradient1"
                            >
                                <span />
                                <span />
                            </a>
                            <span className="df-skin-name">Gradient 1</span>
                        </div>
                    </div>
                </div>

                <div className="pd-y-20 bd-t" style={{ display: "none" }}>
                    <h4 className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">
                        Navigation Layout
                    </h4>
                    <div className="row row-xs">
                        <div className="col">
                            <a
                                href="../classic/dashboard-one.html"
                                className="btn btn-xs btn-outline-secondary btn-uppercase btn-block"
                            >
                                Horizontal
                            </a>
                        </div>
                        <div className="col">
                            <a
                                href="../classic-plus/dashboard-one.html"
                                className="btn btn-xs btn-outline-secondary btn-uppercase btn-block"
                            >
                                Vertical
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pd-y-20 bd-t" style={{ display: "none" }}>
                    <h4 className="tx-sans tx-10 tx-uppercase tx-bold tx-spacing-1 tx-color-02 mg-b-15">
                        Font Family Base
                    </h4>
                    <div className="row row-xs">
                        <div className="col-7">
                            <a
                                href="/"
                                id="setFontBase"
                                className="btn btn-xs btn-outline-secondary active"
                            >
                                IBM Plex Sans
                            </a>
                        </div>
                        <div className="col-5">
                            <a
                                href="/"
                                id="setFontRoboto"
                                className="btn btn-xs btn-outline-secondary"
                            >
                                Roboto
                            </a>
                        </div>
                    </div>
                </div>
            </StyledSettingsBody>
        </StyledSettings>
    );
};

export default SettingsCard;
