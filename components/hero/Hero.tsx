"use client"
import Image from 'next/image'
import styles from './styles.module.scss'
import useTranslation from '@/widgets/header/UseTrnaslation';

export default function Hero(){
      const { t } = useTranslation();
    
    return(
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content} >
                    <Image src={'/logo.png'} alt='logo' width={106} height={106}/>
                    <h1 className={styles.title}>1TRACE</h1>
                    <h2 className={styles.subtitle}>{t.logo_subtitle}</h2>
                </div>
            </div>
        </section>
    )
}