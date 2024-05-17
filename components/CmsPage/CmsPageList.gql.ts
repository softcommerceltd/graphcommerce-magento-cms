/* eslint-disable */
import * as Types from '@graphcommerce/graphql-mesh/.mesh';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export const CmsPageListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CmsPageList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CmsPageList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"content_heading"}},{"kind":"Field","name":{"kind":"Name","value":"meta_title"}},{"kind":"Field","name":{"kind":"Name","value":"meta_description"}},{"kind":"Field","name":{"kind":"Name","value":"meta_keywords"}}]}}]}}]}}]} as unknown as DocumentNode<CmsPageListQuery, CmsPageListQueryVariables>;
export type CmsPageListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CmsPageListQuery = { CmsPageList?: { items?: Array<{ identifier?: string | null, title?: string | null, content?: string | null, content_heading?: string | null, meta_title?: string | null, meta_description?: string | null, meta_keywords?: string | null } | null> | null } | null };
