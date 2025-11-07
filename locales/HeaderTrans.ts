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
  header_texts: string[]
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
      "Next Generation Cyber Intelligence Platform",
      "We offer cutting-edge solutions for your data protection.",
      "Join our community of professionals today!",
      "Latest news and analytics from the world of IT and finance."
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
      "Платформа киберразведки нового поколения",
      "Мы предлагаем передовые решения для защиты ваших данных.",
      "Присоединяйтесь к сообществу профессионалов уже сегодня!",
      "Актуальные новости и аналитика из мира IT и финансов."
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

  } as TranslationKey,
};

export type T = TranslationKey;

export type Lang = keyof typeof translations;