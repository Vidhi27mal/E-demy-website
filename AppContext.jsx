import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

 export const AppContext = createContext()

 
 export const AppContexrProvider = (props) => {


const currency = import.meta.env.VITE_CURRENCY
const navigate = useNavigate()
const[allCourses , setallCourse] = useState([])
const[isEducator , setisEducator] = useState(true)


//fetch all courses
const fetchAllCourses = async()=>{
    setallCourse(dummyCourses)

}
// Function to calculate average rating of courses
const Calculaterating = (course)=>{
    if(course.courseRatings.length === 0){
        return 0;
    }
    let totalRating = 0
    course.courseRatings.forEach(rating=>{
        totalRating += rating.rating

    })
    return totalRating/course.courseRatings.length
    
}



useEffect(() => {
    fetchAllCourses()
} ,[])


    const value = {
        currency, allCourses , navigate , Calculaterating , isEducator,setisEducator

    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

 }