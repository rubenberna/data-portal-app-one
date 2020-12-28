import React from 'react'
import { App } from './components/App'
import PropTypes from 'prop-types'
import { GitHubIcon } from './components/_icons'

const Component = ({ text, searchInput, state }) => {
  return <App text={text} searchInput={searchInput} />
}

const metadata = {
  title: 'Github finder',
  requiredPermissions: ['Admin', 'Super.Admin'],
  description: 'A tiny app to search for Github profiles',
  icon: GitHubIcon
}

export { Component, metadata }

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    errorMessage: PropTypes.string
  })
}
