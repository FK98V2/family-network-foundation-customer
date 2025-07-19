import HeadSection from '../_components/HeadSection';
import SectionLocation from '../_components/SectionLocation';
import { HEAD_SECTION_CONTACT } from '../constants';

export default function Contact() {
  return (
    <>
      <HeadSection {...HEAD_SECTION_CONTACT} />
      <SectionLocation />
    </>
  );
}
