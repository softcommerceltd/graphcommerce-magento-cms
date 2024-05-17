import { RichText } from '@graphcommerce/graphcms-ui'
import { breakpointVal, HeroBanner } from '@graphcommerce/next-ui'
import { Button } from '@mui/material'
import { CmsRowHeroBannerFragment } from './CmsRowHeroBanner.gql'

export function CmsRowHeroBanner(props: CmsRowHeroBannerFragment) {
  const { copy, heroAsset, pageLinks } = props

  return (
    <HeroBanner
      pageLinks={pageLinks.map(({ url, title }) => (
        <Button key={url} href={url} variant='outlined' size='large' color='inherit'>
          {title}
        </Button>
      ))}
      videoSrc={heroAsset.url}
      sx={(theme) => ({
        '& .HeroBanner-copy': {
          // minHeight: { xs: 'min(70vh,600px)', md: 'min(70vh,1080px)' },
          minHeight: { xs: 'min(70vh,600px)', md: 'min(80vh,2160px)' },
          // minHeight: { xs: 'min(70vh,600px)', md: 'min(70vh,800px)' },
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacings.xl,
            justifyItems: 'start',
            alignContent: 'center',
            textAlign: 'left',
            width: '50%',
          },
        },
      })}
    >
      <RichText
        {...copy}
        sxRenderer={{
          paragraph: {
            typography: 'overline',
          },
          'heading-one': (theme) => ({
            textTransform: 'uppercase',
            mt: 1,
            mb: theme.spacings.sm,
            ...breakpointVal('fontSize', 36, 82, theme.breakpoints.values),
            '& strong': {
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: `1.2px #fff`,
            },
          }),
        }}      />
    </HeroBanner>
  )
}
