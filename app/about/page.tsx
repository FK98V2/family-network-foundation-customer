import HeadSection from '../_components/HeadSection';
import SectionBanner from '../_components/SectionBanner';
import SectionCommetee from '../_components/SectionCommetee';
import SectionHistory from '../_components/SectionHistory';
import { HEAD_SECTION_ABOUT } from '../constants';

export default function Home() {
  return (
    <>
      <HeadSection {...HEAD_SECTION_ABOUT} />
      <SectionHistory />
      <SectionCommetee />
      <SectionBanner />
    </>
  );
}
