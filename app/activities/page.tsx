import ShowAllContent from '@/app/_components/AcivitiesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities | Family Network Foundation',
  description: 'Activities and events from Family Network Foundation',
};

interface Props {
  searchParams: Promise<{
    page?: string;
    size?: string;
  }>;
}

export default async function ActivitiesPage({ searchParams }: Props) {
  return <ShowAllContent type='activity' searchParams={await searchParams} />;
}
