'use client'
import { Skeleton } from '@mui/material'
import Stack from '@mui/material/Stack'

const Loading = () => {
  const skeletonDashboard = (
    <Skeleton
      animation="pulse"
      variant="text"
      sx={{ fontSize: '1rem', width: '100%' }}
      className="bg-neutral-800/70 border-2 border-amber-200  hover:border-amber-500 rounded-md my-3 p-2 relative"
    >
      <Skeleton
        animation="pulse"
        variant="rectangular"
        width={2100}
        height={60}
      />
      <Skeleton
        animation="pulse"
        variant="text"
        sx={{ fontSize: '1rem' }}
      />
      <Skeleton className="p-2">
        <Skeleton
          animation="pulse"
          variant="text"
          sx={{ fontSize: '1rem' }}
        />
      </Skeleton>
    </Skeleton>
  )

  return (
    <Stack spacing={0}>
      {skeletonDashboard}
      {skeletonDashboard}
      {skeletonDashboard}
      {skeletonDashboard}
      {skeletonDashboard}
      {skeletonDashboard}
    </Stack>
  )
}

export default Loading
