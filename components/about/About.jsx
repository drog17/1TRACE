"use client"
import { useTranslation } from '@/widgets/header/UseTrnaslation';
import styles from './styles.module.scss';
import { FaSearch, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export default function About() {
    const { t } = useTranslation();    
  
  return (
    <section id='features' className={styles.platform}>
      <div className="container">
        <h2 className={styles.title}>{t.about.title}</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <FaSearch className={styles.icon} />
            <h3>{t.about.cardTitle1}</h3>
            <p>{t.about.desc1}</p>
          </div>
          <div className={styles.card}>
            <FaLightbulb className={styles.icon} />
            <h3>{t.about.cardTitle2}</h3>
            <p>{t.about.desc2}</p>
          </div>
          <div className={styles.card}>
            <FaShieldAlt className={styles.icon} />
            <h3>{t.about.cardTitle3}</h3>
            <p>{t.about.desc3}</p>
          </div>
        </div>
        <div className={styles.particles}></div>
      </div>
    </section>
  );
}
