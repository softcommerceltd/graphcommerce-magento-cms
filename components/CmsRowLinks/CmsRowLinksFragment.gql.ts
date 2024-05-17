/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CmsRowLinksFragment = { __typename: 'CmsRowLinks', id: string, title: string, linksVariant?: Types.RowLinksVariants | null, rowLinksCopy?: { __typename: 'CmsRichText', raw: any } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> };
