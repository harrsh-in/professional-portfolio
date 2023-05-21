const getExperience = () => {
    const joiningDate = new Date(2019, 8, 1).getFullYear();
    const today = new Date().getFullYear();

    return today - joiningDate;
};

const MyData = {
    name: 'Harrsh Patel',
    description: 'Senior Software Developer',
    email: 'me@harrsh.com',
    htmlEmail: 'me[at]harrsh.com',
    call: '+91 9099976321',

    socialLinks: [
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/harrsh2124'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/harrsh2124'
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com/harrsh2124'
        },
        {
            title: 'Dev.to',
            url: 'https://dev.to/harrsh2124'
        },
        {
            title: 'Resume',
            url: 'resume.pdf'
        }
    ],

    aboutMe: {
        totalExperience: getExperience(),
        blogLink: 'harsh2124.wordpress.com',
        details: [
            "Looking for a top-notch MERN stack web developer? Look no further! As a MERN stack web developer, I am a highly skilled professional specializing in MongoDB, Express.js, React.js, and Node.js. With expertise in developing robust, scalable, and high-performance web applications, I excel in delivering exceptional user experiences. Leveraging modern tools and best practices, I ensure clean code, seamless integration of third-party services, and secure authentication mechanisms. From data modeling to RESTful API development, I handle the entire development process with finesse. With a keen eye for detail and a passion for staying ahead of the latest trends, I create cutting-edge applications that surpass expectations. Whether it's deploying on cloud platforms or ensuring cross-browser compatibility, I've got you covered.",

            'With MongoDB, a flexible and scalable NoSQL database and with MySQL, I can design robust data models and efficiently handle complex data structures. Express.js, a minimalistic and flexible web application framework for Node.js, allows me to develop server-side logic and build RESTful APIs that seamlessly interact with the database.',

            "On the client-side, I leverage React.js, a popular JavaScript library, to create interactive and responsive user interfaces. With React's component-based architecture, I build reusable UI components that ensure consistent and efficient code structure. React's virtual DOM and efficient rendering mechanisms optimize performance and enhance the user experience.",

            'Node.js, a runtime environment, enables me to develop server-side applications in JavaScript, providing a seamless and consistent coding experience across the entire stack. It empowers me to build scalable and high-performance applications by leveraging its non-blocking I/O model.',

            'Throughout the development process, I utilize modern development tools and practices. Git for version control ensures efficient collaboration and code management. I also implement testing frameworks like Jest or Mocha to ensure code quality and maintainability.',

            'Additionally, I have experience with authentication and authorization mechanisms, such as JSON Web Tokens (JWT), to ensure secure user access to web applications. Integration of third-party services and APIs is also within my skill set, allowing seamless integration of various functionalities.',

            'I am well-versed in deploying MERN stack applications on cloud platforms like AWS or Heroku, ensuring scalability, reliability, and high availability.',

            'In addition to technical expertise, I possess strong problem-solving skills and excellent communication abilities. I can understand client requirements and translate them into practical technical solutions. I stay up-to-date with the latest industry trends and continually enhance my skills to deliver cutting-edge web applications.',

            "Ready to collaborate and bring your vision to life? Let's build something extraordinary together! Let's work together to create robust, scalable, and feature-rich web applications that exceed your expectations."
        ]
    },

    techStack: [
        'React JS',
        'Next JS',
        'Express JS',
        'Mongo DB',
        'MySQL',
        'Redux / Redux Toolkit',
        'Context API',
        'Prisma',
        'Linux',
        'Server management'
    ],

    workHistory: [
        {
            position: 'Full-stack Web Developer',
            company: 'Excellent WebWorld Pvt. Ltd.',
            companyURL: 'https://www.excellentwebworld.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'April 2022 - Present',
            details: [
                'Worked on a desktop app for IoT devices to measure ECG of patients.',
                'Worked on server and admin panel for a security company. Worked with a complete remote team and managing the server and admin panel effectively.',
                'Worked as a project technical lead for online salon services booking application, where I managed a team of backend and frontend developers. I Bootstrapped an admin panel for back office management and a server for the admin panel, app for customers and app for service providers.'
            ]
        },
        {
            position: 'Front-end Web Developer',
            company: 'TatvaSoft',
            companyURL: 'https://www.tatvasoft.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'May 2021 - April 2022',
            details: [
                'Worked on international Ed-Tech project and Transport management project.',
                'Worked to meet client deadlines.',
                'Effectively multi-tasked and worked well with internal and external teams.',
                'Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.',
                'Effectively did multitasking and worked well with internal and external teams.',
                'Worked with a proficient understanding of code conversion tools.'
            ]
        },
        {
            position: 'Front-end Web Developer',
            company: 'SoftVan Pvt. Ltd.',
            companyURL: 'https://softvan.in/',
            place: 'Ahmedabad, Gujarat',
            duration: 'July 2020 - May 2021',
            details: [
                'Remained dedicated to emerging technology and the latest digital marketing concepts.',
                'Worked with a proficient understanding of code conversion tools.',
                'Worked to assess competing websites in regards to content, look, and feel.',
                'Worked to meet client deadlines.',
                'Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues.'
            ]
        },
        {
            position: 'Python Developer Intern',
            company: 'Crest Data Systems Pvt. Ltd.',
            companyURL: 'https://www.crestdatasys.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'August 2019 - April 2020',
            details: [
                'Created, communicated, and managed project plans.',
                'Collaborated to create strategic initiatives to design, code, and test solutions.',
                'Effectively coded software changes and alterations based on specific design specifications.'
            ]
        }
    ]
};

export default MyData;
