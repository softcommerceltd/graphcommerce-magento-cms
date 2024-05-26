import React from 'react'
import { Box, SxProps, Theme } from '@mui/material'
import { extendableComponent } from '@graphcommerce/next-ui/Styles';
import { Row } from "@graphcommerce/next-ui/Row/Row";
import { responsiveVal } from "@graphcommerce/next-ui/Styles/responsiveVal";

export type IconBlocksProps = {
  title: string
  copy?: React.ReactNode
  children: React.ReactNode
  sx?: SxProps<Theme>
}

const compName = 'IconBlocks' as const
const parts = ['container', 'title', 'optionsWrapper', 'block', 'wrapper'] as const
const { classes } = extendableComponent(compName, parts)

export function CmsRowServiceList(props: IconBlocksProps) {
  const { title, copy, children, sx = [] } = props

  return (
    <Row
      maxWidth='md'
      className={classes.container}
      sx={[{ maxWidth: 820 }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Box className={classes.wrapper} sx={(theme) => ({ paddingTop: `${theme.spacings.lg}` })}>
        <Box
          className={classes.title}
          sx={(theme) => ({ typography: 'h2', textAlign: 'center' as const })}
        >
          {title}
        </Box>

        {copy && (
          <Box sx={(theme) => ({ my: theme.spacings.md })}>
            {copy}
          </Box>
        )}

        <Box
          className={classes.optionsWrapper}
          sx={(theme) => ({
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${responsiveVal(150, 280)}, 1fr))`,
            gap: `${theme.spacings.sm}`,
          })}
        >
          {children}
        </Box>
      </Box>
    </Row>
  )
}
