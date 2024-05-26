import { RichText } from '@graphcommerce/graphcms-ui'
import {breakpointVal, IconBlock, IconBlocks, LayoutTitle} from '@graphcommerce/next-ui'
import IconResolver from '../../components/next-ui/IconResolver'
import { CmsRowServiceList } from './CmsRowServiceList'
import { CmsRowServiceLinksFragment } from './CmsRowServiceLinksFragment.gql'
// import React from 'react';

type RowServiceLinksProps = CmsRowServiceLinksFragment

export function CmsRowServiceLinks(props: RowServiceLinksProps) {
  const { rowServiceTitle, pageLinks, rowServiceCopy } = props

  return (
    <CmsRowServiceList
      title={rowServiceTitle ?? ''}
      copy={
        rowServiceCopy
        && <RichText
          {...rowServiceCopy}
          sxRenderer={{
            paragraph: (theme) => ({
              '@supports (font-variation-settings: normal)': {
                fontVariationSettings: "'wght' 620",
              },
              textAlign: 'center' as const,
              margin: '0 auto',
              [theme.breakpoints.up('lg')]: {
                maxWidth: '80%',
              },
            }),
          }}
        />
      }
    >
      {pageLinks.map((pageLink) => {
        return (
          <IconBlock
            key={pageLink.title}
            href={pageLink.url}
            title={pageLink.title}
            icon={
              <IconResolver iconName={pageLink.icon ?? null} fontSize="large" color="red" />
            }
          >
            {pageLink.description ? <RichText {...pageLink.description} /> : undefined}
          </IconBlock>
        )
      })}
    </CmsRowServiceList>
  )
}
