'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from '../UseTrnaslation'; // Путь к вашему хуку


const HeaderBanner = () => {
    // Получаем функцию перевода 't' и текущий язык 'lang'
    const { t, lang } = useTranslation(); 
    const rotatingTexts = t.header_texts || []; // Используем оператор || [], чтобы избежать ошибок, если ключ не найден
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const intervalTime = 4000; // 4 секунды

    useEffect(() => {
        if (rotatingTexts.length === 0) return; 

        const rotateText = () => {
            setIsVisible(false); // Скрываем текст (fade-out)

            const timeoutId = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
                setIsVisible(true); // Показываем новый текст (fade-in)
            }, 500); // Задержка 500мс для анимации fade-out
            
            return timeoutId;
        };

        const intervalId = setInterval(rotateText, intervalTime);
        
        return () => {
            clearInterval(intervalId);
        }; 
    }, [lang, rotatingTexts.length]); 

    return (
        <header className={styles.headerBanner}>
            <div className={styles.header__content}>
                <p 
                    className={styles.header__text}
                    style={{ opacity: isVisible ? 0.8 : 0 }} 
                >
                    {rotatingTexts[currentIndex]}
                </p>
            </div>
        </header>
    );
};

export default HeaderBanner;