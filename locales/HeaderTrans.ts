type TranslationKey = {
  logo_subtitle: string;
  nav: {
    about: string;
    features: string;
    tech: string;
    support: string;
    contact: string;
  };
  hero: {
    span1: string;
    p1: string;
    span2: string;
    p2: string;
    button: string;
  };
  about: {
    title: string,
    cardTitle1: string,
    desc1: string,
    cardTitle2: string,
    desc2: string,
    cardTitle3: string,
    desc3: string,
  },
  footer: {
    logoSubtitle: string;
    button: string;
    copyright: string;
    description: string;
    developed: string;
    privacy: string;
    agreement: string;
  };
  team: {
    sectionHeader: string;
    jamesTitle: string;
    jamesBio: string;

    oliverTitle: string;
    oliverBio: string;

    danielTitle: string;
    danielBio: string;
    skillsHeader: string; // "Skills:" / "Навыки:"
  };
  skillTags: {
    // Навыки Джеймса Уитмора
    penetrationTesting: string;
    soc: string;
    siem: string;
    threatAnalysis: string;
    networkDefense: string;

    // Навыки Оливера Беннетта
    solidity: string;
    web3Security: string;
    defiAudit: string;
    blockchainForensics: string;
    python: string;

    // Навыки Дэниела Харгривса
    osint: string;
    dataMining: string;
    machineLearning: string;
    cyberIntelligence: string;
  };
  howItWorks: {
    title: string;

    card1Title: string;
    card1Desc: string;

    card2Title: string;
    card2Desc: string;

    card3Title: string;
    card3Desc: string;
  };
  technologies: {
    mainTitle: string;

    card1Title: string;
    card1Desc: string;

    card2Title: string;
    card2Desc: string;

    card3Title: string;
    card3Desc: string;

    card4Title: string;
    card4Desc: string;
  };
  header_texts: string[],
  // Добавленная секция Security
  security: {
    title: string,
    subtitle: string,
    card1Title: string,
    card1Desc: string,
    card2Title: string,
    card2Desc: string,
    card3Title: string,
    card3Desc: string,
    card4Title: string,
    card4Desc: string,
    footer: string,
    btn:string
  }
};

export const translations = {
  // 🇬🇧 Английский язык
  en: {
    "logo_subtitle": "Federal Bureau",
    "nav": {
      "about": "About",
      "features": "Features",
      "tech": "Technology",
      "support": "Support",
      "contact": "Contact"
    },
    "header_texts": [
      "One Trace (1TRACE) — platform for searching information leaks about a person on the Internet.",
      "Professional OSINT analysis in one click.",
      "Platform from specialists in cybersecurity and blockchain technologies.",
    ],
    "hero": {
      "span1": "Next Generation Cyber Intelligence Platform",
      "p1": "Searches, analyzes and prevents data leaks. Your digital security is under control",
      "span2": "1TRACE - a comprehensive approach to eliminating digital security leaks.",
      "p2": "You can independently check leaks in our Telegram bot or order a full audit and data deletion at the 1TRACE Federal Bureau.",
      "button": "Go to telegram bot"
    },
    "about": {
      "title": 'About Platform',
      "cardTitle1": 'OSINT Analysis',
      "desc1": 'Search for information from open sources',
      "cardTitle2": 'AI Intelligence',
      "desc2": 'Artificial intelligence for data correlation',
      "cardTitle3": 'Security',
      "desc3": 'Developed by experts in blockchain and cyber defense'
    },
    "howItWorks": {
      "title": "How 1TRACE Works",

      "card1Title": "Enter Data",
      "card1Desc": "Email, phone, username, TIN, full name",

      "card2Title": "System Analysis",
      "card2Desc": "System analyzes leaks and traces on the Internet",

      "card3Title": "Get Results",
      "card3Desc": "Report in Telegram bot",
    },
    "technologies": {
      "mainTitle": "Our Technologies",

      "card1Title": "API Database Search",
      "card1Desc": "Multiple databases and resources: kad.arbitr, Telegram leaks, OSINT archives and more",

      "card2Title": "Face Recognition",
      "card2Desc": "Face-match AI for person identification",

      "card3Title": "Social Media Identification",
      "card3Desc": "Find social media profiles and possible publications",

      "card4Title": "Behavioral Analysis",
      "card4Desc": "Analysis of digital footprints and behavior patterns",
    },
    "footer": {
      "logoSubtitle": "Federal Bureau",
      "button": "Actual link to Telegram Bot",
      "copyright": "© 2025 1TRACE. All rights reserved.",
      "description": "One trace - personal data leak checking service. 1TRACE Federal Bureau",
      "developed": "Developed by OSINT and Cyber Security specialists.",
      "privacy": "Privacy Policy",
      "agreement": "User Agreement"
    },
    "team": {
      "sectionHeader": "Meet the Team",
      "skillsHeader": "Skills:",

      "jamesTitle": "Cybersecurity Expert",
      "jamesBio": "Cybersecurity expert securing enterprises from modern digital threats.",

      "oliverTitle": "Blockchain Analyst",
      "oliverBio": "Blockchain analyst focused on smart contract security and crypto forensics.",

      "danielTitle": "Big Data & OSINT Specialist",
      "danielBio": "Big Data & OSINT specialist turning complex data into actionable insights.",
    },
    "skillTags": {
      "penetrationTesting": "Penetration Testing",
      "soc": "SOC",
      "siem": "SIEM",
      "threatAnalysis": "Threat Analysis",
      "networkDefense": "Network Defense",

      "solidity": "Solidity",
      "web3Security": "Web3 Security",
      "defiAudit": "DeFi Audit",
      "blockchainForensics": "Blockchain Forensics",
      "python": "Python",

      "osint": "OSINT",
      "dataMining": "Data Mining",
      "machineLearning": "Machine Learning",
      "cyberIntelligence": "Cyber Intelligence",
    },
    "security": {
      "title": "Security. Reliability. Independence.",
      "subtitle": "Your privacy and data protection are the foundation of 1TRACE. We have created a system where every operation, every request, and every byte of information is protected by multi-level security technologies.",
      "card1Title": "Distributed Infrastructure",
      "card1Desc": "The 1TRACE server architecture is built on the principle of decentralization—data is distributed among many nodes in various jurisdictions, which eliminates the possibility of blocking the entire service or data loss. Even if one node fails, the system remains fully operational.",
      "card2Title": "Independent Infrastructure",
      "card2Desc": "All service nodes are located in jurisdictions with a high level of digital protection and are not subject to external interference. The infrastructure operates based on blockchain data replication, which makes centralized deletion or modification of information impossible.",
      "card3Title": "Abuse Resistance and Access Control",
      "card3Desc": "The system is designed to be maximally resistant to abuse and attacks. Multi-level protection is used against bots, DDoS attacks, SQL injection, as well as automatic data integrity checks. All requests are logged and checked by neural network filters to prevent suspicious activity.",
      "card4Title": "Secure Communication Channels",
      "card4Desc": "All data transmission between the user and the system occurs via TLS 1.3 and AES-256 encryption protocols. End-to-End encryption is used for critical operations, similar to the standards of banking systems and messengers with increased confidentiality.",
      "footer": "We protect data not only with encryption — we protect trust. 1TRACE — where security becomes an art.",
      "btn":"Learn More About Security Technologies"
    }
  } as TranslationKey,

  ru: {
    "logo_subtitle": "Федеральное бюро",
    "nav": {
      "about": "О нас",
      "features": "Возможности",
      "tech": "Технологии",
      "support": "Поддержка",
      "contact": "Контакты"
    },
    "header_texts": [
      "Один след (1TRACE) — платформа для поиска утечек информации о персоне в сети интернет.",
      "Профессиональный OSINT-анализ в один клик.",
      "Присоединяйтесь к сообществу профессионалов уже сегодня!",
    ],
    "hero": {
      "span1": "Платформа киберразведки нового поколения",
      "p1": "Ищет, анализирует и предупреждает утечки данных. Ваша цифровая безопасность — под контролем.",
      "span2": "1TRACE - комплексный подход к устранению утечек цифровой безопасности.",
      "p2": "Вы можете самостоятельно проверить утечки в нашем Telegram боте или заказать полный аудит и удаление данных в Федеральном бюро 1TRACE.",
      "button": "Перейти к боту Telegram"
    },
    "about": {
      "title": 'О платформе',
      "cardTitle1": 'OSINT-анализ',
      "desc1": 'Поиск информации по открытым источникам',
      "cardTitle2": 'AI-интеллект',
      "desc2": 'Искусственный интеллект для корреляции данных',
      "cardTitle3": 'Безопасность',
      "desc3": 'Разработано экспертами в области блокчейн и киберзащиты'
    },
    "howItWorks": {
      "title": "Как работает 1TRACE",

      "card1Title": "Ввод данных",
      "card1Desc": "Email, телефон, имя пользователя, ИНН, полное имя",

      "card2Title": "Системный анализ",
      "card2Desc": "Система анализирует утечки и следы в Интернете",

      "card3Title": "Получение результатов",
      "card3Desc": "Отчет в Telegram-боте",
    },
    "technologies": {
      "mainTitle": "Наши технологии",

      "card1Title": "API-поиск по базам данных",
      "card1Desc": "Множественные базы данных и ресурсы: kad.arbitr, Telegram leaks, OSINT-архивы и многое другое",

      "card2Title": "Распознавание лиц",
      "card2Desc": "Face-match AI для идентификации персон",

      "card3Title": "Идентификация в социальных сетях",
      "card3Desc": "Найдем профили в социальных сетях и возможные публикации",

      "card4Title": "Поведенческий анализ",
      "card4Desc": "Анализ цифровых следов и паттернов поведения",
    },
    "footer": {
      "logoSubtitle": "Федеральное бюро",
      "button": "Актуальная ссылка на Telegram-бот",
      "copyright": "© 2025 1TRACE. Все права защищены.",
      "description": "Один след - сервис проверки утечки персональных данных. Федеральное бюро 1TRACE",
      "developed": "Разработано специалистами в области OSINT и Cyber Security.",
      "privacy": "Политика конфиденциальности",
      "agreement": "Пользовательское соглашение"
    },
    "team": {
      "sectionHeader": "Наша команда",
      "skillsHeader": "Навыки:",

      "jamesTitle": "Эксперт по кибербезопасности",
      "jamesBio": "Эксперт по кибербезопасности, обеспечивающий защиту предприятий от современных цифровых угроз.",

      "oliverTitle": "Блокчейн-аналитик",
      "oliverBio": "Блокчейн-аналитик, специализирующийся на безопасности смарт-контрактов и криптофорензике.",

      "danielTitle": "Специалист по Big Data и OSINT",
      "danielBio": "Специалист по Big Data и OSINT, превращающий сложные данные в практические рекомендации.",
    },
    "skillTags": {
      "penetrationTesting": "Тестирование на проникновение",
      "soc": "SOC",
      "siem": "SIEM",
      "threatAnalysis": "Анализ угроз",
      "networkDefense": "Защита сетей",

      "solidity": "Solidity",
      "web3Security": "Безопасность Web3",
      "defiAudit": "Аудит DeFi",
      "blockchainForensics": "Блокчейн-криминалистика",
      "python": "Python",

      "osint": "OSINT",
      "dataMining": "Анализ данных",
      "machineLearning": "Машинное обучение",
      "cyberIntelligence": "Киберразведка",
    },
    "security": {
      "title": "Безопасность. Надёжность. Независимость.",
      "subtitle": "Ваша конфиденциальность и защита данных — фундамент 1TRACE. Мы создали систему, где каждая операция, каждый запрос и каждый байт информации защищён многоуровневыми технологиями безопасности.",
      "card1Title": "Распределённая инфраструктура",
      "card1Desc": "Серверная архитектура 1TRACE построена по принципу децентрализации — данные распределены между множеством узлов в различных юрисдикциях, что исключает возможность блокировки всего сервиса или потери информации. Даже при выходе из строя одного узла система остается полностью работоспособной.",
      "card2Title": "Независимая инфраструктура",
      "card2Desc": "Все узлы сервиса размещены в юрисдикциях с высоким уровнем цифровой защиты и не подвержены внешнему вмешательству. Инфраструктура работает на основе блокчейн-репликации данных, что делает невозможным централизованное удаление или модификацию информации.",
      "card3Title": "Абузоустойчивость и контроль доступа",
      "card3Desc": "Система построена так, чтобы быть максимально устойчивой к злоупотреблениям и атакам. Используется многоуровневая защита от ботов, DDoS-атак, SQL-инъекций, а также автоматическая проверка целостности данных. Все запросы логируются и проверяются нейросетевыми фильтрами для предотвращения подозрительной активности.",
      "card4Title": "Защищённые каналы связи",
      "card4Desc": "Вся передача данных между пользователем и системой происходит по протоколам TLS 1.3 и AES-256-шифрованию. Для критических операций используется End-to-End шифрование, аналогичное стандартам банковских систем и мессенджеров повышенной конфиденциальности.",
      "footer": "Мы защищаем данные не только шифрами — мы защищаем доверие. 1TRACE — там, где безопасность становится искусством.",
      "btn":"                        Подробнее о технологиях безопасности"
    }
  } as TranslationKey,
};

export type T = TranslationKey;

export type Lang = keyof typeof translations;