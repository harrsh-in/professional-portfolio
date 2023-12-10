import React from "react";

import { Metadata } from "next";

import CommonMetaData from "@/src/constants/metadata";

export const metadata: Metadata = {
    title: "About me",
    description: "Generated by create next app",
    ...CommonMetaData,
};

const About = () => {
    return <div>About</div>;
};

export default About;
