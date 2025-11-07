// app/policy/page.tsx (для App Router)

import Link from 'next/link';
// Импорт модульных стилей. Убедитесь, что путь верный
import styles from '@/styles/privacy.module.scss';

// --- 1. Определение Интерфейсов ---

// Интерфейс для пропсов компонента PolicySection
interface PolicySectionProps {
    number: number;
    title: string;
    // children должен быть React.ReactNode (для любого контента: JSX, строки, числа)
    children: React.ReactNode;
}
const PolicySection: React.FC<PolicySectionProps> = ({ number, title, children }) => (
    <div className={styles.policyBlock}>
        <h2 className={styles.headerTitle}>
            {number}. {title}
        </h2>
        <div className="text-gray-300 space-y-3">
            {children}
        </div>
    </div>
);

export default function PolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans relative">
            <div className="container">
                <div className={styles.gridBackground}></div>
                <main className="max-w-4xl mx-auto p-4 md:p-10 relative z-10">
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

                    <header className="text-center mb-12">
                        <h1 className={`text-3xl md:text-5xl font-bold ${styles.mainTitle} mb-2`}>
                            Политика конфиденциальности
                        </h1>
                        <p className="text-gray-400">
                            Последнее обновление: 2 ноября 2025
                        </p>
                    </header>

                    <PolicySection number={1} title="Общие положения">
                        <p>
                            Настоящая Политика конфиденциальности (далее - Политика) регулирует обработку персональных
                            данных пользователей платформы **1TRACE (Федеральное бюро)**. Используя наш сервис, вы
                            соглашаетесь с условиями данной Политики.
                        </p>
                    </PolicySection>

                    <PolicySection number={2} title="Сбор информации">
                        <p>
                            Мы собираем информацию, которую вы предоставляете при использовании нашей платформы, включая:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Контактные данные (имя, email, номер телефона)</li>
                            <li>Данные для проведения OSINT-анализа</li>
                            <li>Информацию об использовании сервиса</li>
                            <li>Технические данные (IP-адрес, тип устройства, браузер)</li>
                        </ul>
                    </PolicySection>

                    <PolicySection number={3} title="Использование информации">
                        <p>
                            Собранные данные используются для:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Предоставления услуг OSINT-анализа</li>
                            <li>Улучшения качества сервиса</li>
                            <li>Обеспечения безопасности платформы</li>
                            <li>Связи с пользователями по вопросам использования сервиса</li>
                            <li>Соблюдения законодательных требований</li>
                        </ul>
                    </PolicySection>

                    <PolicySection number={4} title="Защита данных">
                        <p>
                            1TRACE применяет современные технологии защиты информации, включая **шифрование данных**,
                            **защищенные каналы передачи информации** и **многоуровневую систему безопасности**.
                            Доступ к персональным данным имеют только уполномоченные сотрудники.
                        </p>
                    </PolicySection>

                    <PolicySection number={5} title="Передача данных третьим лицам">
                        <p>
                            Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Требования законодательства</li>
                            <li>Защиты прав и безопасности 1TRACE</li>
                            <li>Предотвращения мошенничества</li>
                            <li>Использования доверенных партнеров для обработки данных (с соблюдением конфиденциальности)</li>
                        </ul>
                    </PolicySection>

                    <PolicySection number={6} title="Хранение данных">
                        <p>
                            Персональные данные хранятся в течение срока, необходимого для достижения целей обработки,
                            или в соответствии с требованиями законодательства. После истечения срока хранения данные
                            удаляются или обезличиваются.
                        </p>
                    </PolicySection>

                    <PolicySection number={7} title="Права пользователей">
                        <p>
                            Вы имеете право:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Получать информацию об обработке ваших данных</li>
                            <li>Требовать исправления неточных данных</li>
                            <li>Требовать удаления данных</li>
                            <li>Отозвать согласие на обработку данных</li>
                            <li>Ограничить обработку данных</li>
                            <li>Получить копию своих данных</li>
                        </ul>
                    </PolicySection>

                    <PolicySection number={8} title="Файлы Cookie">
                        <p>
                            Наш сервис использует **файлы cookie** для улучшения пользовательского опыта, анализа трафика
                            и персонализации контента. Вы можете настроить использование cookie в настройках вашего браузера.
                        </p>
                    </PolicySection>

                    <PolicySection number={9} title="Изменения в Политике">
                        <p>
                            1TRACE оставляет за собой право вносить изменения в настоящую Политику. О существенных
                            изменениях мы сообщим пользователям через наш сервис или по электронной почте.
                        </p>
                    </PolicySection>

                    <PolicySection number={10} title="Контакты">
                        <p>
                            По вопросам обработки персональных данных и реализации ваших прав обращайтесь:
                        </p>
                        <div className="mt-3 space-y-1">
                            <p>
                                **Email:** <a href="mailto:privacy@1trace.ru" className="text-sky-400 hover:underline">privacy@1trace.ru</a>
                            </p>
                            <p>
                                **Telegram:** <a href="https://t.me/onetrace_support" className="text-sky-400 hover:underline">@onetrace_support</a>
                            </p>
                        </div>
                    </PolicySection>

                </main>
                <footer className={styles.footerContainer}>
                    <div className="max-w-4xl mx-auto pb-6">
                        <p>© 2025 1TRACE. Все права защищены.</p>
                        <p className="mt-1">Один след – сервис проверки утечки персональных данных. Федеральное бюро 1TRACE</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

