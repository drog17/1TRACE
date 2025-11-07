'use client';

import { useTranslation } from '@/widgets/header/UseTrnaslation';
import styles from './styles.module.scss';
import { T } from '@/locales/HeaderTrans';
import Image from 'next/image';

type Member = {
  name: string;
  titleKey: keyof T['team'];
  bioKey: keyof T['team'];
  skills: (keyof T['skillTags'])[];
  imageSrc: string;
};

export default function Teams() {
  const { t } = useTranslation();

  const members: Member[] = [
    {
      name: 'James Whitmore',
      titleKey: 'jamesTitle',
      bioKey: 'jamesBio',
      skills: [
        'penetrationTesting',
        'soc',
        'siem',
        'threatAnalysis',
        'networkDefense'
      ],
      imageSrc: '/team/James.png'
    },
    {
      name: 'Oliver Bennett',
      titleKey: 'oliverTitle',
      bioKey: 'oliverBio',
      skills: [
        'solidity',
        'web3Security',
        'defiAudit',
        'blockchainForensics',
        'python'
      ],
      imageSrc: '/team/Bennet.png'
    },
    {
      name: 'Daniel Hargreaves',
      titleKey: 'danielTitle',
      bioKey: 'danielBio',
      skills: [
        'osint',
        'dataMining',
        'machineLearning',
        'python',
        'cyberIntelligence'
      ],
      imageSrc: '/team/Daniel.png'
    }
  ];

  return (
    <section id="support" className={styles.teamSection}>
      <div className="container">
        <div className={styles.cardsGrid}>
          {members.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.memberImage}
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 600px) 150px, 200px"
                />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.title}>{t.team[member.titleKey]}</p>
              <p className={styles.bio}>{t.team[member.bioKey]}</p>

              <div className={styles.skillsBlock}>
                <p className={styles.skillsHeader}>{t.team.skillsHeader}</p>

                <div className={styles.skillsContainer}>
                  {member.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {t.skillTags[skill]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
