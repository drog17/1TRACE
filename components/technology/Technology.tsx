"use client"
import { useTranslation } from '@/widgets/header/UseTrnaslation';
import styles from './styles.module.scss';
import { Coins,Fingerprint, BarChart, QrCode } from "lucide-react";

export default function Techno() {
  const {t}=useTranslation()
  const technologies = [
  {
    icon: <Coins/>, // Placeholder for Database icon
    title: {},
    description: 'Множественные базы данных и ресурсы: kad.arbitr, Telegram leaks, OSINT-архивы и многое другое',
  },
  {
    icon: <QrCode/>, // Placeholder for Face Recognition icon
    title: 'Распознавание лиц',
    description: 'Face-match AI для идентификации персон',
  },
  {
    icon: <Fingerprint/>, // Placeholder for Fingerprint/Identification icon
    title: 'Идентификация в социальных сетях',
    description: 'Найдем профили в социальных сетях и возможные публикации',
  },
  {
    icon: <BarChart/>, // Placeholder for Chart/Analysis icon
    title: 'Поведенческий анализ',
    description: 'Анализ цифровых следов и паттернов поведения',
  },
];
  return (
    <section id='tech' className={styles.sectionContainer}>
      <h2 className={styles.mainTitle}>{t.technologies.mainTitle}</h2>
      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.iconBackground}>
            <span className={styles.cardIcon}><Coins width={34} height={34}/></span>
          </div>
          <h3 className={styles.cardTitle}>{t.technologies.card1Title}</h3>
          <p className={styles.cardDescription}>{t.technologies.card1Desc}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBackground}>
            <span className={styles.cardIcon}><QrCode width={34} height={34}/></span>
          </div>
          <h3 className={styles.cardTitle}>{t.technologies.card1Title}</h3>
          <p className={styles.cardDescription}>{t.technologies.card1Desc}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBackground}>
            <span className={styles.cardIcon}><Fingerprint width={34} height={34}/></span>
          </div>
          <h3 className={styles.cardTitle}>{t.technologies.card2Title}</h3>
          <p className={styles.cardDescription}>{t.technologies.card2Desc}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconBackground}>
            <span className={styles.cardIcon}><BarChart width={34} height={34}/></span>
          </div>
          <h3 className={styles.cardTitle}>{t.technologies.card3Title}</h3>
          <p className={styles.cardDescription}>{t.technologies.card3Desc}</p>
        </div>
      </div>
    </section>
  );
};