import { FC } from "react";
import { StyledForm, StyledInput } from "./style";

const SearchForm: FC = () => {
    return (
        <StyledForm>
            <StyledInput
                id="file-search"
                name="file-search"
                placeholder="Search mail"
            />
        </StyledForm>
    );
};

export default SearchForm;
