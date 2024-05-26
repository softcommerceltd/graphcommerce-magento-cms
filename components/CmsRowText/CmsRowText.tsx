import { RichText } from '@graphcommerce/graphcms-ui'
import { CmsRowTextFragment } from './CmsRowTextFragment.gql'
import { CmsContent } from '../../components/next-ui/CmsContent/CmsContent';

type RowTextProps = CmsRowTextFragment

export function CmsRowText(props: RowTextProps) {
  const { text } = props

  if (!text) return null

  return (
    <CmsContent>
      <RichText {...text} />
    </CmsContent>
  )
}
