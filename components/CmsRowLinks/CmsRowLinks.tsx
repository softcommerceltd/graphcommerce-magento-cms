import {} from '@graphcommerce/graphcms-ui'
import { CmsRowLinksFragment } from './CmsRowLinksFragment.gql'
import { LogoSwiper, ImageLabelSwiper, Inline, Usps } from './variant'

type VariantRenderer = Record<
  NonNullable<CmsRowLinksFragment['linksVariant']>,
  React.VFC<CmsRowLinksFragment>
>

type RowLinksProps = CmsRowLinksFragment & {
  renderer?: Partial<VariantRenderer>
}

const defaultRenderer: Partial<VariantRenderer> = {
  LogoSwiper,
  ImageLabelSwiper,
  Inline,
  Usps,
}

export function CmsRowLinks(props: RowLinksProps) {
  const { renderer, linksVariant, ...RowLinksProps } = props
  const mergedRenderer = { ...defaultRenderer, ...renderer } as VariantRenderer

  if (!linksVariant) return null

  const RenderType =
    mergedRenderer?.[linksVariant] ??
    (() => {
      if (process.env.NODE_ENV !== 'production') return <>renderer for {linksVariant} not found</>
      return null
    })

  return <RenderType {...RowLinksProps} />
}
