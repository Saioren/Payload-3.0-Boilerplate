import React from 'react'
import classes from './index.module.scss'
import { Hero } from '@/types/Layout/Hero/types' // Import the correct type

const LowImpactHero: React.FC<Hero> = (props) => {
  const { lowImpact } = props

  if (!lowImpact) return null

  return null
}

export default LowImpactHero
