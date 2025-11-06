"use client"
import Image from 'next/image'
import styles from './styles.module.scss'
import { useTranslation } from '@/widgets/header/UseTrnaslation';
import CustomButton from '../CustomButton/CustomButton';

export default function Hero(){
  const { t } = useTranslation();    
    return(
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content} >
                    <Image src={'/logo.png'} alt='logo' width={106} height={106}/>
                    <h1 className={styles.title} >1TRACE</h1>
                    <h2 className={styles.subtitle}>{t.logo_subtitle}</h2>
                    <span className={styles.span1}>{t.hero.span1}</span>
                    <p>{t.hero.p1}</p>
                    <span className={styles.span2}>{t.hero.span2}</span>
                    <p>{t.hero.p2}</p>
                    <CustomButton text={t.hero.button}/>
                </div>
            </div>
        </section>
    )
}
