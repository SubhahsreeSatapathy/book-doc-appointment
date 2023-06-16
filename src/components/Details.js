import React,{useEffect,useState} from 'react'
import axios from "axios"
import DetailsPage from "./detailsPage"



const Details = () => {
 
   var details = JSON.parse(localStorage.getItem("category"));
   const category = details;
   //console.log(details);

const [doctorData,setDoctorData] = useState()
useEffect(() => {
  axios
    .get(`http://localhost:4000/details/${category}`)
    .then((response) => {
      const data = response.data;
      setDoctorData(data)
      
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
},[]);


  return ( 
    <div>
      {doctorData && doctorData.map((data)=>{
        //console.log(data);
        return (
          <>
            <DetailsPage data = {data}/>
            
          </>
        );
      })}
    </div>
  )
}

export default Details