import React, { ComponentProps } from "react";

const ParagraphHighlightText = ({ children, ...others }: IProps) => {
    return (
        <span
            {...others}
            className={`${others.className} highlight`}
        >
            {children}
        </span>
    );
};

export default ParagraphHighlightText;

interface IProps extends ComponentProps<"span"> {
    children: React.ReactNode;
}
