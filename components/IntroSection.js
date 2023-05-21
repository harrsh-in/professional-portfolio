import Image from 'next/image';
import React from 'react';
import MyPhoto from '../public/MyPhoto.svg';
import MyPhotoJpg from '../public/MyPhoto.jpg';
import MyData from '../data/myDetails';
import style from '../styles/Home.module.css';
import { useAmp } from 'next/amp';

export const config = {
    amp: 'hybrid'
};

const IntroSection = () => {
    const loadAmp = useAmp();

    return (
        <section className={`${style.introSectionContainer} ${style.sectionContainer}`}>
            <div className={style.introSectionImage}>
                {loadAmp ? (
                    <amp-img
                        src={MyPhoto}
                        alt="Harsh Patel"
                        layout="responsive"
                        width="152"
                        height="152"
                    />
                ) : (
                    <Image
                        src={MyPhoto}
                        alt="Harsh Patel"
                        priority={true}
                        fill
                        sizes="152"
                        quality="100"
                        placeholder="blur"
                        blurDataURL={'../public/MyPhoto.jpg'}
                    />
                )}
            </div>

            <div className={style.introSectionText}>
                <h1>{MyData.name}</h1>
                <h2>{MyData.description}</h2>
                <div className={style.introSectionEmail}>
                    📧 <a href={`mailto:${MyData.email}`}>{MyData.htmlEmail}</a>
                </div>
                <div className={style.introSectionEmail}>
                    📞 <a href={`tel:${MyData.call}`}>{MyData.call}</a>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
