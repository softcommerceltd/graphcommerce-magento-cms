/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CmsRowProductFragment = { __typename: 'CmsRowProduct', id: string, title: string, variant?: Types.RowProductVariants | null, identity: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }>, productCopy?: { __typename: 'CmsRichText', raw: any } | null };
