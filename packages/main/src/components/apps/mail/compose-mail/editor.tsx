import { Component } from "react";
import { Button } from "@doar/components";
import ReactQuill from "react-quill";
import {
    StyledWrap,
    StyledToolbarWrap,
    StyledToolbar,
    StyledBtnWrap,
} from "./style";

const CustomToolbar = () => (
    <StyledToolbarWrap>
        <StyledToolbar id="toolbar2">
            <span className="ql-formats">
                <button type="button" className="ql-bold" />
                <button type="button" className="ql-italic" />
                <button type="button" className="ql-underline" />
            </span>
            <span className="ql-formats">
                <button type="button" className="ql-link" />
                <button type="button" className="ql-image" />
            </span>
        </StyledToolbar>
        <StyledBtnWrap>
            <Button color="white" mr="5px">
                Save as Draft
            </Button>
            <Button>Reply</Button>
        </StyledBtnWrap>
    </StyledToolbarWrap>
);

interface IProps {
    placeholder: string;
}

interface IState {
    editorHtml: string;
}

class Editor extends Component<IProps, IState> {
    static modules = {
        toolbar: {
            container: "#toolbar2",
        },
    };

    static formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
    ];

    constructor(props: IProps) {
        super(props);
        this.state = {
            editorHtml: "",
        };
    }

    handleChange = (html: string): void => {
        this.setState({ editorHtml: html });
    };

    render(): JSX.Element {
        const { editorHtml } = this.state;
        const { placeholder } = this.props;
        const { modules, formats } = Editor;
        return (
            <StyledWrap>
                <ReactQuill
                    value={editorHtml}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    modules={modules}
                    formats={formats}
                />
                <CustomToolbar />
            </StyledWrap>
        );
    }
}

export default Editor;
