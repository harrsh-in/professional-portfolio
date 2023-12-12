import { Metadata } from "next";
import Link from "next/link";

import Heading from "./Heading";
import SocialMedia from "./SocialMedia";
import ParagraphText from "../../components/ParagraphText";
import CommonMetaData from "../../constants/metadata";

export const metadata: Metadata = {
    ...CommonMetaData,
    title: "About me",
    description: "Generated by create next app",
};

const About = () => {
    return (
        <div>
            <Heading />

            <ParagraphText>
                In my role as a Senior Full-Stack Developer, I have honed my
                skills in cloud computing and full-stack development over the
                past 4 years. My expertise in AWS services encompasses EC2, S3,
                DynamoDB, VPC, IAM, and more, enabling me to build and maintain
                scalable cloud infrastructure. I am proficient in both front-end
                and back-end development, with a strong command of technologies
                like Node.js, React.js, Express.js, and databases such as MySQL,
                PostgreSQL, and MongoDB. My experience includes working with
                messaging brokers like Redis, MQTT, and SQS, and I am familiar
                with various development IDEs and management tools like Visual
                Studio Code, Jira, and Trello.
            </ParagraphText>

            <ParagraphText>
                Photography and travel are my gateways to new experiences, with
                my camera capturing the essence of diverse landscapes and
                cultures. My current literary journey with &quot;The Hidden
                Hindu&quot; is a testament to my love for reading, offering new
                perspectives and insights.
            </ParagraphText>

            <ParagraphText>
                Cooking and baking are my forms of creative expression, where I
                experiment with flavors and techniques. It&apos;s a therapeutic
                process that complements my structured approach to technology.
            </ParagraphText>

            <ParagraphText>
                I believe in maintaining a harmonious balance between my
                professional endeavors and personal interests. This equilibrium
                not only drives my success in the tech industry but also
                enriches my life with diverse experiences and continuous
                learning.
            </ParagraphText>

            <ParagraphText>
                I&apos;m always eager to connect with like-minded individuals,
                discuss new technological trends, or simply share stories. Feel
                free to reach out for collaborations, discussions, or just a
                friendly conversation about the ever-evolving world of
                technology.
            </ParagraphText>

            <ParagraphText>
                You can reach me out on the following platforms:
            </ParagraphText>
            <SocialMedia />

            <ParagraphText>
                To connect further you can react out to me at{" "}
                <Link href="mailto:dev@harrsh.com">dev[at]harrsh.com</Link>.
            </ParagraphText>
        </div>
    );
};

export default About;
