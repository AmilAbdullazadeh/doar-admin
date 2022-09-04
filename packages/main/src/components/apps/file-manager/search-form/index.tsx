import { FC } from "react";
import { StyledForm, StyledInput } from "./style";

const SearchForm: FC = () => {
    return (
        <StyledForm>
            <StyledInput
                id="file-search"
                name="file-search"
                placeholder="Search for files and folders"
            />
        </StyledForm>
    );
};

export default SearchForm;
