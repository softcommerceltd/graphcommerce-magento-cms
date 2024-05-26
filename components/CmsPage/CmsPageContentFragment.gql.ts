/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CmsPageContentFragment = { __typename: 'CmsPage', identifier?: string | null, url_key?: string | null, title?: string | null, content?: string | null, content_heading?: string | null, page_layout?: string | null, meta_title?: string | null, meta_description?: string | null, meta_keywords?: string | null, meta_robots?: string | null, cmsRowContent: Array<{ __typename: 'CmsRowHeroBanner', id: string, heroAsset: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null }, copy: { __typename: 'CmsRichText', raw: any }, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> } | { __typename: 'CmsRowLinks', id: string, title: string, linksVariant?: Types.RowLinksVariants | null, rowLinksCopy?: { __typename: 'CmsRichText', raw: any } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> } | { __typename: 'CmsRowProduct', id: string, title: string, variant?: Types.RowProductVariants | null, identity: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }>, productCopy?: { __typename: 'CmsRichText', raw: any } | null } | { __typename: 'CmsRowQuote', id: string, quote: { __typename: 'CmsRichText', raw: any } } | { __typename: 'CmsRowServiceLinks', id: string, rowServiceTitle?: string | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }>, rowServiceCopy?: { __typename: 'CmsRichText', raw: any } | null } | { __typename: 'CmsRowSpecialBanner', id: string, topic: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, copy: { __typename: 'CmsRichText', raw: any }, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> } | { __typename: 'CmsRowText', id: string, text: { __typename: 'CmsRichText', raw: any } }> };
