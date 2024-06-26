import { RichText } from '@graphcommerce/graphcms-ui'
import { Quote } from '@graphcommerce/next-ui'
import React from 'react'
import { CmsRowQuoteFragment } from './CmsRowQuoteFragment.gql'

type RowQuoteProps = CmsRowQuoteFragment

export function CmsRowQuote(props: RowQuoteProps) {
  const { quote } = props

  return (
    <Quote>
      <RichText
        {...quote}
        sxRenderer={{
          paragraph: (theme) => ({
            typography: 'h4',
            fontWeight: 600,
            '@supports (font-variation-settings: normal)': {
              fontVariationSettings: "'wght' 620",
            },
            textTransform: 'uppercase' as const,
            maxWidth: '60%',
            textAlign: 'center' as const,
            margin: '0 auto',
            [theme.breakpoints.up('lg')]: {
              maxWidth: '80%',
            },
          }),
        }}
      />
    </Quote>
  )
}
