import { Grid2 as Grid } from '@mui/material';
import { getProcurements } from '../fetch';
import Procurement from './Procurement';
import PaginationParams from './PaginationParams';
import ComingSoon from './ComingSoon';

export default async function ProcurementContent() {
  const { data: procurements } = await getProcurements({ page: 0, size: 10 });

  if (!procurements.content.length) {
    return <ComingSoon />;
  }
  return (
    <>
      {procurements.content.map((procurement) => (
        <Procurement key={procurement.id} {...procurement} />
      ))}
      <Grid container justifyContent='center' size={12}>
        <PaginationParams
          totalPages={procurements.pagination.totalPages}
          scrollToId='procurement-section'
        />
      </Grid>
    </>
  );
}
