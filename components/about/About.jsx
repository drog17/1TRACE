import styles from './styles.module.scss';
import { FaSearch, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section className={styles.platform}>
      <div className="container">
        <h2 className={styles.title}>О платформе</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <FaSearch className={styles.icon} />
            <h3>OSINT-анализ</h3>
            <p>Поиск информации по открытым источникам</p>
          </div>
          <div className={styles.card}>
            <FaLightbulb className={styles.icon} />
            <h3>AI-интеллект</h3>
            <p>Искусственный интеллект для корреляции данных</p>
          </div>
          <div className={styles.card}>
            <FaShieldAlt className={styles.icon} />
            <h3>Безопасность</h3>
            <p>Разработано экспертами в области блокчейн и киберзащиты</p>
          </div>
        </div>
        <div className={styles.particles}></div>
      </div>
    </section>
  );
}
