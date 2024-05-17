import { ProductSpecsFragment } from '@graphcommerce/magento-product/components/ProductSpecs/ProductSpecs.gql'
import { CmsRowProductFragment } from './CmsRowProductFragment.gql'
import {
  Backstory,
  Feature,
  FeatureBoxed,
  Grid,
  Related,
  Reviews,
  Specs,
  Swipeable,
  Upsells
} from "../../../../../components/GraphCMS/RowProduct/variant";


type VariantRenderer = Record<
  NonNullable<CmsRowProductFragment['variant']>,
  React.VFC<CmsRowProductFragment>
>

type RowProductProps = CmsRowProductFragment & {
  renderer?: Partial<VariantRenderer>
} & ProductSpecsFragment & { items?: unknown } & { sku?: string | null | undefined }

const defaultRenderer: Partial<VariantRenderer> = {
  Specs,
  Backstory,
  Feature,
  FeatureBoxed,
  Grid,
  Related,
  Reviews,
  Upsells,
  Swipeable,
}

export function CmsRowProduct(props: RowProductProps) {
  const { renderer, variant, ...RowProductProps } = props
  const mergedRenderer = { ...defaultRenderer, ...renderer } as VariantRenderer

  // console.log('rowProduct ::: props ----', props)

  if (!variant) return null

  const RenderType =
    mergedRenderer?.[variant] ??
    (() => {
      if (process.env.NODE_ENV !== 'production') return <>renderer for {variant} not found</>
      return null
    })

  return <RenderType {...RowProductProps} />
}
