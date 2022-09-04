import { FC } from "react";
import { Row, Col, Anchor, Image } from "@doar/components";
import image1 from "@doar/shared/images/img2.jpg";
import image2 from "@doar/shared/images/img3.jpg";
import image3 from "@doar/shared/images/img4.jpg";
import image4 from "@doar/shared/images/img5.jpg";
import image5 from "@doar/shared/images/img6.jpg";
import image6 from "@doar/shared/images/img7.jpg";
import image7 from "@doar/shared/images/img18.jpg";
import image8 from "@doar/shared/images/img19.jpg";
import image9 from "@doar/shared/images/img20.jpg";
import WidgetTitle from "../widget-title";

const Gallery: FC = () => {
    return (
        <>
            <WidgetTitle
                title="Photos"
                link={{ text: "Add Photo", path: "#!" }}
            />
            <Row gutters={2}>
                <Col col={4}>
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image1} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4}>
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image2} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4}>
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image3} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image4} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image5} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image6} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image7} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image8} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
                <Col col={4} mt="2px">
                    <Anchor path="#!" display="block" height="60px">
                        <Image src={image9} alt="gallery" fit="cover" />
                    </Anchor>
                </Col>
            </Row>
        </>
    );
};

export default Gallery;
