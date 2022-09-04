import { FC } from "react";
import { Select, Button } from "@doar/components";
import { StyledWrap, StyledTitle, StyledDesc, StyledLabel } from "./style";

const ExportContacts: FC = () => {
    return (
        <StyledWrap>
            <StyledTitle>Export Contacts</StyledTitle>
            <StyledDesc>
                You can export your contacts and import them into other email
                apps.
            </StyledDesc>
            <form>
                <StyledLabel htmlFor="exp-contact">
                    Which contacts do you want to export?
                </StyledLabel>
                <Select name="exp-contact" id="exp-contact">
                    <option value="all">All Contacts</option>
                    <option value="fav">My Favourtis</option>
                    <option value="friend">My Friends</option>
                    <option value="officemate">My Officemates</option>
                </Select>
                <Button type="submit" size="sm" mt="20px">
                    Export
                </Button>
            </form>
        </StyledWrap>
    );
};

export default ExportContacts;
