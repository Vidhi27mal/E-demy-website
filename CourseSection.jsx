import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'

const CourseSection = () => {
  const{allCourses} = useContext(AppContext)
  return (
    
     <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from 
        the best</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>
          Our courses are designed to help you learn from the best in the industry.
          With a focus on hands-on learning, you'll be able to<br></br> apply your new skills
          to real-world projects and take your career to the next level.</p>
       
       
        <div className='grid grid-cols-auto px-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses?.slice(0,4).map((course , index)=> <CourseCard key={index} course={course}
        />)}</div>

        <Link to={'/CourseList'} onClick={()=> scrollTo(0,0)}
        className='text-sm md:text-base text-blue-500 font-medium mt-5'>Show all the course</Link>
     </div>
    
  )
}

export default CourseSection
