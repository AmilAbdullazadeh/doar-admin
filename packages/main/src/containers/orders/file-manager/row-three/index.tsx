import { FC } from "react";
import { Row, Col } from "@doar/components";
import Label from "../../../../components/apps/file-manager/label";
import FilePreview from "../../../../components/apps/file-manager/file-preview";
import { StyledDevider } from "./style";

const RowOne: FC = () => {
    return (
        <>
            <Label mb="15px">Files</Label>
            <Row gutters={10}>
                <Col col={6} sm={4} md={3} xl>
                    <FilePreview
                        icon="far fa-file-word"
                        color="primary"
                        title="Job Requirements.docx"
                        link="#!"
                        size="10.45kb"
                        type="Word Document"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl>
                    <FilePreview
                        icon="far fa-file-powerpoint"
                        color="orange"
                        title="My Presentation.ppt"
                        link="#!"
                        size="135kb"
                        type="Presentation File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt={["10px", 0]}>
                    <FilePreview
                        icon="far fa-file-excel"
                        color="success"
                        title="Inventory.xls"
                        link="#!"
                        size="22.67kb"
                        type="Spreadsheet File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt={["10px", null, 0]}>
                    <FilePreview
                        icon="far fa-file-pdf"
                        color="danger"
                        title="GettingStarted.pdf"
                        link="#!"
                        size="94kb"
                        type="PDF File"
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
                        icon="far fa-file-image"
                        color="indigo"
                        title="DesignMockup.psd"
                        link="#!"
                        size="105.4mb"
                        type="Photoshop File"
                    />
                </Col>
                <StyledDevider />
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-alt"
                        color="gray600"
                        title="Instructions.txt"
                        link="#!"
                        size="43.9kb"
                        type="Text Document"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-word"
                        color="primary"
                        title="Journal.docx"
                        link="#!"
                        size="33.4kb"
                        type="Word Document"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-image"
                        color="indigo"
                        title="IMG_063037.jpg"
                        link="#!"
                        size="4.1mb"
                        accessed="6 hours ago"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-audio"
                        color="info"
                        title="MusicTwo.mp3"
                        link="#!"
                        size="4.40mb"
                        type="Mp3 File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-alt"
                        color="gray600"
                        title="ReadMe.txt"
                        link="#!"
                        size="43.9kb"
                        type="Text Document"
                    />
                </Col>
                <StyledDevider />
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-video"
                        color="pink"
                        title="MiniMovie.mp4"
                        link="#!"
                        size="22.2mb"
                        type="MP4 File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-code"
                        color="orange"
                        title="home.html"
                        link="#!"
                        size="43.9kb"
                        type="HTML Document"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-code"
                        color="primary"
                        title="style.css"
                        link="#!"
                        size="43.9kb"
                        type="CSS File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px">
                    <FilePreview
                        icon="far fa-file-code"
                        color="purple"
                        title="package.json"
                        link="#!"
                        size="2.3kb"
                        type="JSON File"
                    />
                </Col>
                <Col col={6} sm={4} md={3} xl mt="10px" />
            </Row>
        </>
    );
};

export default RowOne;
