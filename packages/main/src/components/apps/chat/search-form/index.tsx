import { FC } from "react";
import { Search } from "react-feather";
import { StyledForm, StyledInput, StyledButton } from "./style";

const SearchForm: FC = () => {
    return (
        <StyledForm>
            <StyledInput
                id="chat-search"
                name="chat-search"
                placeholder="Search"
            />
            <StyledButton type="submit" variant="texted">
                <Search />
            </StyledButton>
        </StyledForm>
    );
};

export default SearchForm;
