import React from 'react'
import { Route , Routes, useMatch} from 'react-router-dom'
import Home from './Pages/students/Home'
import CourseList from './Pages/students/CourseList'
import CourseDetails from './Pages/students/CourseDetails'
import MyEnrollments from './Pages/students/MyEnrollments'
import Player from './Pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './Pages/Educator/Educator'
import DashBoard from './Pages/Educator/DashBoard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourse from './Pages/Educator/MyCourse'
import StudentsEnrollments from './Pages/Educator/StudentsEnrollments'
import Navbar from './components/students/Navbar'


const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  
  return (
    <div className='text-default min-h-screen bg-white' >
      {!isEducatorRoute && <Navbar/>}
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/CourseList' element={<CourseList/>} />
        <Route path='/CourseList/:input' element={<CourseList/>} />
        <Route path='/Course/:id' element={<CourseDetails/>} />
        <Route path='/MyEnrollments' element={<MyEnrollments/>} />
        <Route path='/Player/:CourseId' element={<Player/>} />
        <Route path='/Loading/:path' element={<Loading/>} />
        
        
        <Route path='/Educator' element={<Educator/>}>
             <Route path='Educator' element={<DashBoard/>} />
             <Route path='AddCourse' element={<AddCourse/>} />
             <Route path='Mycourse' element={<MyCourse/>} />
             <Route path='Studentenroll' element={<StudentsEnrollments/>} />
        </Route>
        


        

      </Routes>
      
    </div>
  )
}

export default App

