import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import BeatLoader from 'react-spinners/ClipLoader'
import {
  avatar,
  flexColumnContainer,
  searchButton,
  profileStyle,
  smallRightMargin,
  subTitle,
  input
} from './_styles'
import { GitHubIcon } from './_icons'

export const GithubProfileSearch = () => {
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState(undefined)

  const fetchProfile = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${searchInput}`)
    setLoading(false)
    setProfile(res.data)
  }

  const renderProfile = () => (
    <div style={profileStyle}>
      <img style={avatar} src={profile.avatar_url} alt='github avatar' />
      <div>
        <p>
          <span style={subTitle}>Name: </span>
          <span>{profile.name}</span>
        </p>
        <p>
          <span style={subTitle}>Repos: </span>
          <span>{profile.public_repos}</span>
        </p>
      </div>
    </div>
  )

  return (
    <div style={flexColumnContainer}>
      <input
        type='text'
        placeholder='search by Github handler'
        style={input}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={fetchProfile} type='submit' style={searchButton}>
        <GitHubIcon style={smallRightMargin} />
        Search Github profiles
      </button>
      <BeatLoader size={70} color='#399D8B' loading={loading} />
      {profile && renderProfile()}
    </div>
  )
}

GithubProfileSearch.propTypes = {
  searchInput: PropTypes.string
}
