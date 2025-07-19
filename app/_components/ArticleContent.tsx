import { Grid2 as Grid } from '@mui/material';
import { getArticles } from '../fetch';
import Article from './Article';
import { Suspense } from 'react';
import PaginationParams from './PaginationParams';
import ComingSoon from './ComingSoon';

interface Props {
  searchParams: {
    page?: string;
    size?: string;
  };
}

export default async function ArticleContent({ searchParams }: Props) {
  const {
    data: { content: articles, pagination },
  } = await getArticles({
    page: Number(searchParams?.page) - 1 || 0,
    size: 10,
  });

  if (!articles.length) return <ComingSoon />;

  return (
    <>
      {articles?.map((article) => (
        <Grid key={article.id} size={{ xs: 12, md: 6 }}>
          <Article key={article.id} {...article} />
        </Grid>
      ))}
      <Grid container justifyContent='center' size={12} mt={4}>
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationParams
            totalPages={pagination?.totalPages || 0}
            scrollToId='article-section'
          />
        </Suspense>
      </Grid>
    </>
  );
}
