import { FC } from "react";
import { Search } from "react-feather";
import { Input, Button } from "@doar/components";
import { StyledForm } from "./style";

const SearchForm: FC = () => {
    return (
        <StyledForm>
            <Input
                type="text"
                id="post-search"
                name="post-serach"
                placeholder="Search people"
            />
            <Button variant="texted" iconButton size="md">
                <Search />
            </Button>
        </StyledForm>
    );
};

export default SearchForm;
