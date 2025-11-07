'use client';
import Link from 'next/link';
import { useTranslation } from '../header/UseTrnaslation'; // ⭐️ Импорт вашего хука
import { FaTelegram, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import styles from './styles.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton/CustomButton';

const SOCIAL_LINKS = {
    x: 'https://twitter.com/your_x_handle',
    instagram: 'https://instagram.com/your_insta_handle',
    telegram: 'https://t.me/your_channel_handle',
};
export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer id='contact' className={styles.footer}>
            <div className="container">
                <div className={styles.topRow}>
                    <div className={styles.logoBlock}>
                        <Image className={styles.logo} src={'/logo.png'} alt='' width={44} height={44} />
                        <div>
                            <span className={styles.logoTitle}>1TRACE</span>
                            <p className={styles.logoSubtitle}>{t.footer.logoSubtitle}</p>
                        </div>
                    </div>
                    <CustomButton text={t.footer.button}/>
                    <div className={styles.socials}>
                        <Link href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaXTwitter />
                        </Link>
                        <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaInstagram />
                        </Link>
                        <Link href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaTelegram />
                        </Link>
                    </div>
                </div>
                <hr className={styles.divider} />

                <div className={styles.bottomRow}>
                    {/* ⭐️ ИСПОЛЬЗУЕМ ПЕРЕВОДЫ */}
                    <p className={styles.copyright}>{t.footer.copyright}</p>
                    <p className={styles.description}>{t.footer.description}</p>
                    <p className={styles.developed}>{t.footer.developed}</p>

                    <div className={styles.policyLinks}>
                        {/* ⭐️ ИСПОЛЬЗУЕМ ПЕРЕВОДЫ ДЛЯ ССЫЛОК */}
                        <Link href="https://t.me/onetrace_support" className={styles.policyLink}>{t.footer.privacy}</Link>
                        <Link href="https://t.me/onetrace_support" className={styles.policyLink}>{t.footer.agreement}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}