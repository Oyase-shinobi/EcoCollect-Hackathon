import React from 'react'
import { Link } from 'react-router-dom'

const MediumButton = ({text, linkto}) => {
  return (
    <Link to={`${linkto}`} className=' text-sm w-32 bg-primary40 p-4 mt-6 text-white rounded-[8px] hover:tracking-wide ease-in-out duration-300'>{text}</Link>
  )
}

export default MediumButton
