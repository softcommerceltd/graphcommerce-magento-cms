import { LazyHydrate, RenderType, TypeRenderer } from '@graphcommerce/next-ui'
import { CmsRowContentQueryFragment } from './CmsRowContentQueryFragment.gql';
import { CmsRowHeroBanner } from './CmsRowHeroBanner/CmsRowHeroBanner'
import { CmsRowText } from './CmsRowText/CmsRowText';
import { CmsRowLinks } from './CmsRowLinks/CmsRowLinks'
import { CmsRowProduct } from './CmsRowProduct/CmsRowProduct';
import { CmsRowQuote } from './CmsRowQuote/CmsRowQuote';
import { CmsRowSpecialBanner } from "./CmsRowSpecialBanner/CmsRowSpecialBanner";
import { CmsRowServiceLinks } from './CmsRowServiceLinks/CmsRowServiceLinks';
import { CmsPageContentQueryFragment } from './CmsPage/CmsPageContentQueryFragment.gql';

type ContentTypeRenderer = TypeRenderer<CmsPageContentQueryFragment['cmsPage']['cmsRowContent'][0]>

const defaultRenderer: Partial<ContentTypeRenderer> = {
  CmsRowHeroBanner,
  CmsRowLinks,
  CmsRowProduct,
  CmsRowSpecialBanner,
  CmsRowQuote,
  CmsRowServiceLinks,
  CmsRowText
}

export type PageProps = CmsRowContentQueryFragment & {
  renderer?: Partial<ContentTypeRenderer>
  loadingEager?: number
}

export function CmsRowRenderer(props: PageProps) {
  const { cmsRowContent, renderer, loadingEager = 2 } = props
  const mergedRenderer = { ...defaultRenderer, ...renderer } as ContentTypeRenderer

  return (
    <>
      {cmsRowContent?.map((item, index) => (
        <LazyHydrate key={item.id} hydrated={index < loadingEager ? true : undefined}>
          <RenderType renderer={mergedRenderer} {...item} />
        </LazyHydrate>
      ))}
    </>
  )
}
