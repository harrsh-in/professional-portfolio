import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { Fragment } from 'react';
import style from '../styles/Home.module.css';
const WorkHistorySection = dynamic(() => import('../components/WorkHistorySection'));
const SocialLinksSection = dynamic(() => import('../components/SocialLinksSection'));
const TechStackSection = dynamic(() => import('../components/TechStackSection'));
const ThemeToggler = dynamic(() => import('../components/ThemeToggler'));
const AboutMeSection = dynamic(() => import('../components/AboutMeSection'));
const IntroSection = dynamic(() => import('../components/IntroSection'));

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Harrsh Patel | Full-Stack Web Developer</title>
                <link rel="canonical" href="https://www.harrsh.com" />
            </Head>

            <div className={style.main}>
                <div className={style.navbar}>
                    <ThemeToggler />
                </div>

                <div className={`${style.detailsSection} container`}>
                    <IntroSection />
                    <SocialLinksSection />
                    <AboutMeSection />
                    <TechStackSection />
                    <WorkHistorySection />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
