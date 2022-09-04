import { FC } from "react";
import { Row, Col } from "@doar/components";
import Label from "../../../../components/apps/file-manager/label";
import FolderPreview from "../../../../components/apps/file-manager/folder-preview";

const RowOne: FC = () => {
    return (
        <>
            <Label mb="15px">FOLDERS</Label>
            <Row gutters={10}>
                <Col sm={6} lg={4} xl={3}>
                    <FolderPreview
                        title="Downloads"
                        link="#!"
                        files={2}
                        size="14.05mb"
                    />
                </Col>
                <Col sm={6} lg={4} xl={3} mt={["10px", 0]}>
                    <FolderPreview
                        title="Personal Stuff"
                        link="#!"
                        files={8}
                        size="73.06mb"
                    />
                </Col>
                <Col sm={6} lg={4} xl={3} mt={["10px", null, null, 0]}>
                    <FolderPreview
                        title="Personal Stuff"
                        link="#!"
                        files={5}
                        size="126.3mb"
                    />
                </Col>
                <Col sm={6} lg={4} xl={3} mt={["10px", null, null, null, 0]}>
                    <FolderPreview
                        title="Recordings"
                        link="#!"
                        files={0}
                        size=""
                    />
                </Col>
                <Col sm={6} lg={4} xl={3} mt="10px">
                    <FolderPreview
                        title="Support"
                        link="#!"
                        files={1}
                        size="20mb"
                    />
                </Col>
            </Row>
        </>
    );
};

export default RowOne;
