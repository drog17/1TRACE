"use client";

import { useTranslation } from "@/widgets/header/UseTrnaslation";
import styles from "./styles.module.scss";
import { Lock,Globe, Server, Cpu } from "lucide-react";

const SecurityBlock = () => {
    const {t}=useTranslation()
    return (
        <section className={styles.securityBlock}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {t.security.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {t.security.subtitle}
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <Server className={styles.icon} />
                            <h3>{t.security.card1Title}</h3>
                            <p>
                                {t.security.card1Desc}
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <Lock className={styles.icon} />
                            <h3>{t.security.card2Title}</h3>
                            <p>
                                {t.security.card2Desc}
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <Globe className={styles.icon} />
                            <h3>{t.security.card3Title}</h3>
                            <p>
                                {t.security.card3Desc}
                            </p>
                        </div>
                        <div className={styles.feature}>
                            <Cpu className={styles.icon} />
                            <h3>{t.security.card4Title}</h3>
                            <p>
                                {t.security.card4Desc}
                            </p>
                        </div>
                    </div>

                    <p className={styles.footer}>
                        {t.security.footer}
                    </p>
                    <button className={styles.securityButton}>
                        <span className={styles.icon}>🛡️
                        </span>
{t.security.btn}                        <span className={styles.arrow}>
                            ❯
                        </span>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default SecurityBlock;
