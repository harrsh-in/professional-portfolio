import React, { ComponentProps } from "react";

const ParagraphText = ({ children, ...others }: IProps) => {
    return <p className={`${others} py-3`}>{children}</p>;
};

export default ParagraphText;

interface IProps extends ComponentProps<"p"> {
    children: React.ReactNode;
}
