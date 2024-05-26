/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

export type CmsRowHeroBannerFragment = { __typename: 'CmsRowHeroBanner', id: string, heroAsset: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null }, copy: { __typename: 'CmsRichText', raw: any }, pageLinks: Array<{ __typename: 'CmsPageLink', id?: string | null, title: string, url: string, icon?: string | null, asset?: { __typename: 'CmsAsset', url: string, width?: number | null, height?: number | null, mimeType: string, size?: number | null, alt?: string | null } | null, description?: { __typename: 'CmsRichText', raw: any } | null }> };
