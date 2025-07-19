import React from 'react';
import BoxSlide from './BoxSlide';
import { getAnnoucement } from '@/app/fetch';

interface Props {
  showIntroduce?: boolean;
}

export default async function SectionAnnouncement({
  showIntroduce = false,
}: Props) {
  const { data: announcements } = await getAnnoucement();
  return <BoxSlide showIntroduce={showIntroduce} items={announcements} />;
}
