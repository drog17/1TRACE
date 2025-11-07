'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from './UseTrnaslation';
import styles from './styles.module.scss';
import HeaderBanner from './headerBanner/HeaderBanner';
import { RU, GB } from 'country-flag-icons/react/3x2';

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
        <div className={styles.langSwitcher}>
          <button
            onClick={() => switchLang('ru')}
            className={`${styles.langBtn} ${lang === 'ru' ? styles.active : ''}`}>
            <span className={styles.langCode}>RU</span>
            <RU className={styles.flagIcon} />
          </button>
          <button
            onClick={() => switchLang('en')}
            className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}>
            <span className={styles.langCode}>EN</span>
            <GB className={styles.flagIcon} />
          </button>
        </div>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
      <HeaderBanner />
    </header>
  );
}