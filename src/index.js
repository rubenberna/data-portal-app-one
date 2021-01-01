import React from 'react'
import { App } from './components/App'
import PropTypes from 'prop-types'
import { logo } from './assets/base64.images'

const Component = ({ state }) => {
  return <App sate={state} />
}

const metadata = {
  title: 'Github finder',
  requiredPermissions: ['Admin', 'Super.Admin'],
  description: 'A tiny app to search for Github profiles',
  libraryPath: '@data-portal/app-one',
  icon: logo
}

export { Component as default, metadata }

App.propTypes = {
  state: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    errorMessage: PropTypes.string
  })
}
