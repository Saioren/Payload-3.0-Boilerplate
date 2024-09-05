import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type

const LowImpactHero: React.FC<Hero> = (props) => {
  const { lowImpactHero } = props

  if (!lowImpactHero) return null

  const { padding, heading } = lowImpactHero

  return <p>{heading}</p>
}

export default LowImpactHero
