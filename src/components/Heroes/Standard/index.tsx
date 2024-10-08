import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type

const StandardHero: React.FC<Hero> = (props) => {
  const { standardHero } = props

  if (!standardHero) return null

  const { heroImage, padding, heading } = standardHero

  return <p>{heading}</p>
}

export default StandardHero
