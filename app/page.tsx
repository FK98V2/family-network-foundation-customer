import SectionTypeFamily from './_components/SectionTypeFamily';
import SectionObjective from './_components/SectionObjective';
import SectionHistory from './_components/SectionHistory';
import SectionAlive from './_components/SectionAlive';
import SectionGame from './_components/SectionGame';
import SectionWelcome from './_components/SectionWelcome';
import SectionActivitiesMark from './_components/SectionActivitiesMark';

export default function Home() {
  return (
    <>
      <SectionWelcome />
      <SectionTypeFamily />
      <SectionGame />
      <SectionObjective />
      <SectionHistory />
      <SectionActivitiesMark />
      <SectionAlive />
    </>
  );
}
