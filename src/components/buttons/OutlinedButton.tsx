import { ButtonHTMLAttributes } from "react";

const OutlinedButton = ({ className, children, ...rest }: IProps) => {
    return (
        <button
            {...rest}
            className={`border border-black py-1 px-4 rounded ${className}`}
        >
            {children}
        </button>
    );
};

export default OutlinedButton;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
