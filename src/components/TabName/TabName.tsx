import { FC, Fragment, memo, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { TabNameProps } from './props'
import * as Styled from './styles'

const TabName: FC<TabNameProps> = memo(props => {
  const { children, tabName } = props

  const titleTab = useMemo(() => `frame.posts | ${tabName}`, [tabName])

  return (
    <Fragment>
      <Helmet>
        <title>{titleTab}</title>
      </Helmet>
      <Styled.Container>{children}</Styled.Container>
    </Fragment>
  )
})

export { TabName }
