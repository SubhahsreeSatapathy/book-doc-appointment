import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Details.css"

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
}, []);
const navigate = useNavigate()
function navigation() {
    navigate("/slot")
}

  return ( 
    <div>
      {doctorData && doctorData.map((data)=>{
        return (
          <>
            <Card className="card" onClick={navigation}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {data.doctorName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.contactNo}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={navigation}>
                  Book Slot
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </div>
  )
}

export default Details