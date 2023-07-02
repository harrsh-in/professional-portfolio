import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="google-site-verification"
                        content="Tqj-B_bSqzECheWc3ywpMN84lTT_5_M2Y8ZB0WRgn8U"
                    />
                    <link rel="icon" href="/favicon.ico" />

                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                        crossOrigin="anonymous"
                        async
                    />

                    {/* Google fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* Google fonts */}

                    {/* SEO */}

                    {/* Primary Meta Tags */}
                    <meta name="title" content="Harrsh Patel | Full-Stack Web Developer" />
                    <meta
                        name="description"
                        content="I am Harrsh Patel, an experienced Full Stack Web Developer proficient in both front-end and back-end development, skilled in creating dynamic, user-friendly websites and web applications to deliver seamless and efficient solutions."
                    />
                    <meta
                        name="keywords"
                        content="software, developer, programmer, harrsh, harsh, full-stack, web, react, node, mern, express, javascript, database"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="en" />
                    <meta name="author" content="Harrsh Patel" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.harrsh.com/" />
                    <meta property="og:title" content="Harrsh Patel | Full-Stack Web Developer" />
                    <meta
                        property="og:description"
                        content="I am Harrsh Patel, an experienced Full Stack Web Developer proficient in both front-end and back-end development, skilled in creating dynamic, user-friendly websites and web applications to deliver seamless and efficient solutions."
                    />
                    <meta property="og:image" content="https://www.harrsh.com/MyPhoto.jpg" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://www.harrsh.com/" />
                    <meta
                        property="twitter:title"
                        content="Harrsh Patel | Full-Stack Web Developer"
                    />
                    <meta
                        property="twitter:description"
                        content="I am Harrsh Patel, an experienced Full Stack Web Developer proficient in both front-end and back-end development, skilled in creating dynamic, user-friendly websites and web applications to deliver seamless and efficient solutions."
                    />
                    <meta property="twitter:image" content="https://www.harrsh.com/MyPhoto.jpg" />

                    {/* SEO */}
                </Head>
                <body className="dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
