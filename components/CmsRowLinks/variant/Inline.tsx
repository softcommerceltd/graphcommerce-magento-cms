import { VariantInline } from '@graphcommerce/next-ui'
import { Link } from '@mui/material'

import { CmsRowLinksFragment } from '../CmsRowLinksFragment.gql'

export function Inline(props: CmsRowLinksFragment) {
  const { title, pageLinks } = props

  return (
    <VariantInline title={title} maxWidth={false} sx={(theme) => ({ my: theme.spacings.md })}>
      {pageLinks.map((pageLink) => (
        <Link href={pageLink.url} key={pageLink.id} color='inherit' underline='hover'>
          {pageLink.title}
        </Link>
      ))}
    </VariantInline>
  )
}
