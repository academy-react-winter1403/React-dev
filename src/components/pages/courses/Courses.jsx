import axios from 'axios'
import React from 'react'
import { htttp } from '../../../core/services/interceptor'
import TopSection from './TopSection'

const Courses = () => {
  return (
    <div className='courses-holder'>
      <TopSection/>
    </div>
  )
}

export default Courses
