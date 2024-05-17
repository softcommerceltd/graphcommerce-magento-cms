/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CmsRowContentQueryFragment = { cmsRowContent: Array<{ __typename: 'CmsRowHeroBanner', id: string, heroAsset: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null }, copy: { __typename: 'CmsRichText', raw: any }, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> } | { __typename: 'CmsRowLinks', id: string, title: string, linksVariant?: Types.RowLinksVariants | null, rowLinksCopy?: { __typename: 'CmsRichText', raw: any } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> } | { __typename: 'CmsRowProduct', id: string, title: string, variant?: Types.RowProductVariants | null, identity: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }>, productCopy?: { __typename: 'CmsRichText', raw: any } | null } | { __typename: 'CmsRowQuote', id: string, quote: { __typename: 'CmsRichText', raw: any } } | { __typename: 'CmsRowSpecialBanner', id: string, topic: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, copy: { __typename: 'CmsRichText', raw: any }, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> }> };
