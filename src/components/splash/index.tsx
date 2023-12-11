"use client";
import React, { useEffect, useState } from "react";

import Loader from "./Loader";

const Splash = ({ children }: IProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    return loading ? <Loader /> : children;
};

export default Splash;

interface IProps {
    children: React.ReactNode;
}
