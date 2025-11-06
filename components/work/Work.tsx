import styles from './styles.module.scss';

export default function Work() {
    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <h2 className={styles.title}>Как работает 1TRACE</h2>
                <div className={styles.steps}>
                    <div className={styles.card}>
                        <div className={styles.number}>01</div>
                        <h3 className={styles.cardTitle}>Введите данные</h3>
                        <p className={styles.cardText}>
                            Email, телефон, username, ИНН, ФИО
                        </p>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.card}>
                        <div className={styles.number}>02</div>
                        <h3 className={styles.cardTitle}>Анализ системы</h3>
                        <p className={styles.cardText}>
                            Система анализирует утечки и следы в интернете
                        </p>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.card}>
                        <div className={styles.number}>03</div>
                        <h3 className={styles.cardTitle}>Получите результат</h3>
                        <p className={styles.cardText}>
                            Отчёт в Telegram-боте
                        </p>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.pulseButton}>
                        Начать проверку
                    </button>
                </div>
                <div className={styles.particles}></div>
            </div>
        </section>
    );
}
