import Image from 'next/image';
import React from 'react';
import MyPhoto from '../public/MyPhoto.jpg';
import MyData from '../data/myDetails';
import style from '../styles/Home.module.css';

const IntroSection = () => {
    return (
        <section className={`${style.introSectionContainer} ${style.sectionContainer}`}>
            <div className={style.introSectionImage}>
                <Image
                    src={MyPhoto}
                    alt="Harsh Patel"
                    priority={true}
                    layout="responsive"
                    quality="100"
                    placeholder="blur"
                />
            </div>

            <div className={style.introSectionText}>
                <h1>{MyData.name}</h1>
                <h2>{MyData.description}</h2>
                <div className={style.introSectionEmail}>
                    📧 <a href={`mailto:${MyData.email}`}>{MyData.email}</a>
                </div>
                <div className={style.introSectionEmail}>
                    📞 <a href={`tel:${MyData.call}`}>{MyData.call}</a>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
