import AmbitionsCarousel from '@/components/AmbitionsCarousel';
import TerminalHero from '@/components/TerminalHero';
import EventCalendar from '@/components/EventCalender';
import ContributionSection from '@/components/ContributionSelection';
import Footer from '@/components/Footer'
export default function Home() {
  return (
  <>
  <TerminalHero />
  <AmbitionsCarousel/>
  <EventCalendar/>
  <ContributionSection />
  <Footer />
  </>
  );
}
