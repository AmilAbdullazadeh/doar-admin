import { FC } from "react";
import { Heading, Text } from "@doar/components";
import SearchForm from "../../../components/search-form";
import { StyledWrap } from "./style";

const PageHeader: FC = () => {
    return (
        <StyledWrap>
            <div>
                <Heading as="h4" mb="5px">
                    Help Support Center
                </Heading>
                <Text color="text3">
                    Search for any help questions or topics.
                </Text>
            </div>
            <SearchForm />
        </StyledWrap>
    );
};

export default PageHeader;
