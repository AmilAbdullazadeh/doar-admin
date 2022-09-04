import { FC } from "react";
import { Row, Col } from "@doar/components";
import Label from "../../../../components/apps/file-manager/label";
import FilePreview from "../../../../components/apps/file-manager/file-preview";

const RowOne: FC = () => {
    return (
        <>
            <Label mb="15px">Recently Accessed Files</Label>
            <Row gutters={10}>
                <Col col={6} sm={4} md={3} xl>
                    <FilePreview
                        icon="far fa-file-pdf"
                        color="danger"
                        title="Medical Certificate.pdf"
                        link="#!"
                        size="10.45kb"
                        accessed="2 hours ago"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl>
                    <FilePreview
                        icon="far fa-file-word"
                        color="primary"
                        title="Job Contract.docx"
                        link="#!"
                        size="22.67kb"
                        accessed="6 hours ago"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt={["10px", 0]}>
                    <FilePreview
                        icon="far fa-file-image"
                        color="indigo"
                        title="IMG_063037.jpg"
                        link="#!"
                        size="4.1mb"
                        accessed="6 hours ago"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt={["10px", null, 0]}>
                    <FilePreview
                        icon="far fa-file-audio"
                        color="info"
                        title="Music_One.mp3"
                        link="#!"
                        size="3.40mb"
                        accessed="7 hours ago"
                    />
                </Col>
                <Col
                    col={6}
                    sm={4}
                    md={3}
                    xl
                    mt={["10px", null, null, null, 0]}
                >
                    <FilePreview
                        icon="far fa-file-word"
                        color="primary"
                        title="Job Contract-2.docx"
                        link="#!"
                        size="17.67kb"
                        accessed="8 hours ago"
                    />
                </Col>
            </Row>
        </>
    );
};

export default RowOne;
