import { getActivitiesHighlight } from '../fetch';
import AnimationSlideAutoCard from './AnimationSlideAutoCard';
import ComingSoon from './ComingSoon';

export default async function SectionSlideCard() {
  const { data: activities } = await getActivitiesHighlight();

  if (!activities.length) return <ComingSoon />;
  return <AnimationSlideAutoCard items={activities} animationDuration={240} />;
}
