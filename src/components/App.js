import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './Header'
import { GithubProfileSearch } from './GithubProfileSearch'
import { flexColumnContainer } from './_styles'

export const App = ({ state }) => {
  return (
    <div style={flexColumnContainer}>
      <Header text={state?.username} />
      <GithubProfileSearch />
    </div>
  )
}

App.propTypes = {
  searchInput: PropTypes.string,
  text: PropTypes.string
}
