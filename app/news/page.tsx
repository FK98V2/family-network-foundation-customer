import SectionActivitiesRecent from '../_components/SectionActivitiesRecent';
import SectionEmployment from '../_components/SectionProcurement';
import SectionQuickNews from '../_components/SectionQuickNews';

export default function News() {
  return (
    <>
      <SectionQuickNews />
      <SectionActivitiesRecent />
      <SectionEmployment />
    </>
  );
}
