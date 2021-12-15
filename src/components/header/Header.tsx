import * as React from "react"
import PropTypes from "prop-types"
import { HeaderLayout, Title } from './HeaderLayout'

const Header = ({ siteTitle }) => (
  <HeaderLayout>
    <div>
      <Title title={siteTitle}>{siteTitle}</Title>
    </div>
  </HeaderLayout>
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
