'use client'; // ⭐️ Обязательно для использования хуков (useTranslation)
import styles from './styles.module.scss';
// 🛑 ПРИМЕЧАНИЕ: Используйте правильный путь к вашему хуку useTranslation
import { useTranslation } from '@/widgets/header/UseTrnaslation'; 


export default function Work() {
    const { t } = useTranslation(); // Получаем объект перевода

    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                {/* 1. ЗАГОЛОВОК */}
                {/* ⭐️ Используем t.howItWorks.title */}
                <h2 className={styles.title}>{t.howItWorks.title}</h2> 
                
                <div className={styles.steps}>
                    
                    {/* 2. КАРТОЧКА 1: Ввод данных */}
                    <div className={styles.card}>
                        <div className={styles.number}>01</div>
                        {/* ⭐️ Используем t.howItWorks.card1Title */}
                        <h3 className={styles.cardTitle}>{t.howItWorks.card1Title}</h3>
                        <p className={styles.cardText}>
                            {/* ⭐️ Используем t.howItWorks.card1Desc */}
                            {t.howItWorks.card1Desc}
                        </p>
                    </div>
                    
                    <div className={styles.arrow}>→</div>
                    
                    {/* 3. КАРТОЧКА 2: Системный анализ */}
                    <div className={styles.card}>
                        <div className={styles.number}>02</div>
                        {/* ⭐️ Используем t.howItWorks.card2Title */}
                        <h3 className={styles.cardTitle}>{t.howItWorks.card2Title}</h3>
                        <p className={styles.cardText}>
                            {/* ⭐️ Используем t.howItWorks.card2Desc */}
                            {t.howItWorks.card2Desc}
                        </p>
                    </div>
                    
                    <div className={styles.arrow}>→</div>
                    
                    {/* 4. КАРТОЧКА 3: Получение результатов */}
                    <div className={styles.card}>
                        <div className={styles.number}>03</div>
                        {/* ⭐️ Используем t.howItWorks.card3Title */}
                        <h3 className={styles.cardTitle}>{t.howItWorks.card3Title}</h3>
                        <p className={styles.cardText}>
                            {/* ⭐️ Используем t.howItWorks.card3Desc */}
                            {t.howItWorks.card3Desc}
                        </p>
                    </div>
                </div>
                
                <div className={styles.particles}></div>
            </div>
        </section>
    );
}