import { FC } from "react";
import { Database } from "react-feather";
import { Media, MediaBody, Text, Progress, Anchor } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const StorageStatus: FC = () => {
    return (
        <StyledWrap>
            <Label mb="15px">Storage Status</Label>
            <Media>
                <Database size={30} />
                <MediaBody pl={10}>
                    <Text fontSize={12} mb="4px">
                        10.2GB used of 50GB
                    </Text>
                    <Progress now={15} height="3px" mb={20} />
                </MediaBody>
            </Media>
            <Text fontSize={12}>
                Get 2TB (2,000GB) of storage now and get 40% off. Offers ends
                soon. <Anchor path="#!">Learn more</Anchor>
            </Text>
        </StyledWrap>
    );
};

export default StorageStatus;
