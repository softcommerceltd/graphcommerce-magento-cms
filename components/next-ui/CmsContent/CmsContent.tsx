import { Box, SxProps, Theme } from '@mui/material'

type CmsContentProps = {
  children: React.ReactNode
  sx?: SxProps<Theme>
}

export function CmsContent(props: CmsContentProps) {
  const { children, sx = [] } = props

  return (
    <Box
      maxWidth='md'
      sx={[
        (theme) => ({
          margin: '0 auto',
          marginBottom: theme.spacings.sm,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  )
}
