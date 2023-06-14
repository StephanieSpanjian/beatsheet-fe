'use client'
import { Skeleton } from '@mui/material'
import Stack from '@mui/material/Stack'

const Loading = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        animation="pulse"
        variant="text"
        sx={{ fontSize: '1rem' }}
      />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton
        variant="circular"
        width={40}
        height={40}
      />
      <Skeleton
        variant="rectangular"
        width={210}
        height={60}
      />
      <Skeleton
        variant="rounded"
        width={210}
        height={60}
      />
    </Stack>
  )
}

export default Loading