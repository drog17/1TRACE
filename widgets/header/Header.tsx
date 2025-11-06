// Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// Импортируем исправленный хук
import { useTranslation } from './UseTrnaslation'; 
import styles from './styles.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const { t, lang, switchLang } = useTranslation(); 
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <Image className={styles.logo} src="/logo.png" alt="1TRACE" width={44} height={44} />
        <div>
          <h1 className={styles.logoTitle}>1TRACE</h1>
          <p className={styles.logoSubtitle}>{t.logo_subtitle}</p>
        </div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <Link href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
        <Link href="#features" onClick={() => setMenuOpen(false)}>{t.nav.features}</Link>
        <Link href="#tech" onClick={() => setMenuOpen(false)}>{t.nav.tech}</Link>
        <Link href="#support" onClick={() => setMenuOpen(false)}>{t.nav.support}</Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
      </nav>

      <div className={styles.langSwitcher}>
        <button
          // ⭐️ Используем switchLang из контекста
          onClick={() => switchLang('ru')}
          className={`${styles.langBtn} ${lang === 'ru' ? styles.active : ''}`}>
          RU
        </button>
        <button
          // ⭐️ Используем switchLang из контекста
          onClick={() => switchLang('en')}
          className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}>
          EN
        </button>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}