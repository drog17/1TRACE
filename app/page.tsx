import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'
import SecurityBlock from '@/components/security/Security'
import Work from '@/components/work/Work'
import Header from '@/widgets/header/Header'
import styles from './page.module.scss'
import Techno from '@/components/technology/Technology'
import Footer from '@/widgets/footer/Footer'
import Teams from '@/components/team/Teams'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Techno/>
      <SecurityBlock />
      <Teams/>
      <div className={styles.chatButtonContainer}>
        <span className={styles.hoverText}>Связаться с поддержкой</span>
        <button className={styles.chatButton}><a href="https://t.me/onetrace_support">💬</a></button>
      </div>
      <Footer/>
    </>
  )
}