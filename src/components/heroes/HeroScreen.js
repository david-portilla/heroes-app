import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById'

const HeroScreen = () => {

  const { heroeId } = useParams()
  const hero = getHeroesById(heroeId)

  if (!hero) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1>HeroScreen</h1>
    </>
  )
}

export default HeroScreen
