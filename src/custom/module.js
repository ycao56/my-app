import React from 'react'
import PropTypes from 'prop-types'

const Page = () =>
  <div>
    custom module
  </div>

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Page