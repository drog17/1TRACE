
import Link from 'next/link';
import React from 'react';
// Импорт модульных стилей
import styles from '@/styles/agreement.module.scss';

// --- 1. Определение Интерфейсов ---
interface AgreementSectionProps {
    number: number;
    title: string;
    children: React.ReactNode;
}

// --- 2. Компонент Секции (AgreementSection) ---
const AgreementSection: React.FC<AgreementSectionProps> = ({ number, title, children }) => (
    <div className={styles.policyBlock}>
        <h2 className={styles.headerTitle}>
            {number}. {title}
        </h2>
        <div className="text-gray-300 space-y-3">
            {children}
        </div>
    </div>
);

// --- 3. Основная Страница (UserAgreementPage) ---
export default function UserAgreementPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans relative">

            <div className={styles.gridBackground}></div>
            <div className="container">

                <main className="max-w-4xl mx-auto p-4 md:p-10 relative z-10">

                    {/* Кнопка Назад (с исправленным SVG) */}
                    <div className={styles.header}>
                        <div className="mb-10 pt-4">
                            <Link href="/">
                                <p className={styles.backButton}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        width={24} height={24} viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Назад на главную
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Заголовок страницы */}
                    <header className="text-center mb-12">
                        <h1 className={`text-3xl md:text-5xl font-bold ${styles.mainTitle} mb-2`}>
                            Пользовательское соглашение
                        </h1>
                        <p className="text-gray-400">
                            Последнее обновление: 2 ноября 2025
                        </p>
                    </header>

                    {/* 13 Блоков Соглашения */}
                    <AgreementSection number={1} title="Общие условия">
                        <p>
                            Настоящее Пользовательское соглашение (далее - Соглашение) регулирует отношения между
                            платформой **1TRACE (Федеральное бюро)** и пользователями сервиса. Используя платформу, вы
                            принимаете условия настоящего Соглашения в полном объеме.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={2} title="Описание сервиса">
                        <p>
                            1TRACE - профессиональная платформа OSINT-анализа, предоставляющая услуги по:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Поиску и анализу утечек персональных данных</li>
                            <li>Идентификации в социальных сетях</li>
                            <li>Распознаванию лиц с использованием AI</li>
                            <li>Поведенческому анализу цифровых следов</li>
                            <li>Поиску по базам данных и OSINT-архивам</li>
                        </ul>
                    </AgreementSection>

                    <AgreementSection number={3} title="Регистрация и учетная запись">
                        <p>
                            Для использования сервиса необходимо:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Предоставить достоверную информацию при регистрации</li>
                            <li>Обеспечить конфиденциальность данных доступа</li>
                            <li>Немедленно уведомлять о несанкционированном доступе</li>
                            <li>Не передавать доступ к учетной записи третьим лицам</li>
                        </ul>
                        <p className="mt-4">
                            Вы несете ответственность за все действия, совершенные под вашей учетной записью.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={4} title="Правила использования">
                        <p>
                            При использовании платформы **ЗАПРЕЩАЕТСЯ**:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Использовать сервис для незаконной деятельности</li>
                            <li>Нарушать права и законные интересы третьих лиц</li>
                            <li>Распространять вредоносное ПО</li>
                            <li>Пытаться получить несанкционированный доступ к системе</li>
                            <li>Использовать автоматизированные средства сбора данных</li>
                            <li>Размещать ложную или вводящую в заблуждение информацию</li>
                        </ul>
                    </AgreementSection>

                    <AgreementSection number={5} title="Интеллектуальная собственность">
                        <p>
                            Все материалы платформы 1TRACE, включая, но не ограничиваясь: программный код, дизайн,
                            логотипы, базы данных, являются объектами интеллектуальной собственности и защищены
                            законодательством. Запрещается копирование, модификация или распространение без письменного
                            согласия правообладателя.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={6} title="Предоставление услуг">
                        <p>
                            1TRACE обязуется:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Обеспечивать доступность сервиса 24/7 (за исключением технического обслуживания)</li>
                            <li>Защищать конфиденциальность пользовательских данных</li>
                            <li>Предоставлять техническую поддержку</li>
                            <li>Своевременно информировать об изменениях в работе сервиса</li>
                        </ul>
                    </AgreementSection>

                    <AgreementSection number={7} title="Оплата услуг">
                        <p>
                            Условия оплаты:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Тарифы публикуются на официальном сайте и в Telegram-боте</li>
                            <li>Оплата производится согласно выбранному тарифному плану</li>
                            <li>Возврат средств осуществляется в соответствии с условиями тарифа</li>
                            <li>1TRACE оставляет за собой право изменять тарифы с уведомлением пользователей</li>
                        </ul>
                    </AgreementSection>

                    <AgreementSection number={8} title="Ответственность сторон">
                        <p>
                            Пользователь несет полную ответственность за:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Законность использования полученной информации</li>
                            <li>Соблюдение применимого законодательства</li>
                            <li>Ущерб, причиненный третьим лицам в результате использования сервиса</li>
                        </ul>
                    </AgreementSection>

                    <AgreementSection number={9} title="Конфиденциальность">
                        <p>
                            Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности
                            1TRACE и применимым законодательством о защите персональных данных.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={10} title="Прекращение использования">
                        <p>
                            1TRACE имеет право:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Приостановить или прекратить доступ к сервису при нарушении Соглашения</li>
                            <li>Удалить учетную запись пользователя без предварительного уведомления</li>
                            <li>Отказать в предоставлении услуг без объяснения причин</li>
                        </ul>
                        <p className="mt-4">
                            Пользователь может прекратить использование сервиса в любое время, удалив свою учетную
                            запись.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={11} title="Изменение условий">
                        <p>
                            1TRACE оставляет за собой право изменять условия настоящего Соглашения. Измененная версия
                            вступает в силу с момента публикации. Продолжение использования сервиса после внесения
                            изменений означает согласие с новыми условиями.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={12} title="Разрешение споров">
                        <p>
                            Все споры решаются путем переговоров. При невозможности достижения соглашения споры
                            передаются на рассмотрение в суд по месту нахождения 1TRACE в соответствии с
                            законодательством Российской Федерации.
                        </p>
                    </AgreementSection>

                    <AgreementSection number={13} title="Контактная информация">
                        <p>
                            По вопросам использования сервиса обращайтесь:
                        </p>
                        <div className="mt-3 space-y-1">
                            <p>
                                **Email:** <a href="mailto:support@1trace.ru" className={styles.textLink}>support@1trace.ru</a>
                            </p>
                            <p>
                                **Telegram:** <a href="https://t.me/onetrace_support" className={styles.textLink}>@onetrace_support</a>
                            </p>
                            <p>
                                **Официальный сайт:** <a href="https://1trace.ru" className={styles.textLink}>1trace.ru</a>
                            </p>
                        </div>
                    </AgreementSection>

                </main>

                {/* 3. Футер (Подвал) */}
                <footer className={styles.footerContainer}>
                    <div className="max-w-4xl mx-auto pb-6">
                        <p>© 2025 1TRACE. Все права защищены.</p>
                        <p className="mt-1">Один след – сервис проверки утечки персональных данных. Федеральное бюро 1TRACE</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}