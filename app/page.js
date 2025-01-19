import AmbitionsCarousel from '@/components/AmbitionsCarousel';
import TerminalHero from '@/components/TerminalHero';
import EventCalendar from '@/components/EventCalender';
export default function Home() {
  return (
  <>
  <TerminalHero />
  <AmbitionsCarousel/>
  <EventCalendar/>
  <AmbitionsCarousel/>
  </>
  );
}
