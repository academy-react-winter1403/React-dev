import axios from 'axios'
import React from 'react'
import { htttp } from '../../../core/services/interceptor'

const endUrl = import.meta.env.VITE_END_URL

htttp.get(endUrl)

const Courses = () => {
  return (
    <div>
      Courses...
    </div>
  )
}

export default Courses
