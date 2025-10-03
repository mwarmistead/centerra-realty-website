import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InvestmentProcess from '@/components/InvestmentProcess'
import AdvisoryServices from '@/components/AdvisoryServices'
import ConnectSection from '@/components/ConnectSection'
import SecondaryMarkets from '@/components/SecondaryMarkets'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InvestmentProcess />
      <AdvisoryServices />
      <ConnectSection />
      <SecondaryMarkets />
      <Footer />
    </>
  );
}