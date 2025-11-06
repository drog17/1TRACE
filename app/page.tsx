import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'
import Work from '@/components/work/Work'
import Header from '@/widgets/header/Header'

export default function Home(){
  return(
    <>
    <Header/>
    <Hero/>
    <About/>
    <Work/>
    </>
  )
}