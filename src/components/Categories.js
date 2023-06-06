import React, { useEffect,useState } from 'react'
import axios from "axios"
import Cards from "./Cards";
import Cardiology from "../assets/cards/cardiology.jpg";
import Dermatology from "../assets/cards/Derma.png";
import Neurology from "../assets/cards/neuro.png";
import Radiology from "../assets/cards/radiology.webp";
import Oncology from "../assets/cards/radio.avif";
import Pediatric from "../assets/cards/pedia.jpg";
import "./Home.css";
//import { Grid } from "@mui/material";


const Categories = () => {
 const [data,setData] = useState()
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
 useEffect(() => {
   axios.get("http://localhost:4000/home").then((response) => {
    setData(response.data)
    //console.log(response)
   });
 },[]);
console.log(data)
 
  return (
    <div className="card-container">
      {/* <Grid container spacing={2} className="grid">
        <Grid item xs={4}>
          <Cards
            heading="Cardiologists"
            desc="Keep the Heart young and healthy"
            img={Cardiology}
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            heading="Dermatologist"
            desc="The best derm practices just for you"
            img={Dermatology}
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            heading="Neurologist"
            desc="Making the brain healthier"
            img={Neurology}
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            heading="Radiologist"
            desc="Changing the world of x-rays"
            img={Radiology}
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            heading="Oncologist"
            desc="The best oncologists in the town"
            img={Oncology}
          />
        </Grid>
        <Grid item xs={4}>
          <Cards
            heading="Pediatrician"
            desc="Heal a child, change the world"
            img={Pediatric}
          />
        </Grid>
      </Grid> */}
      {data && data.map((e)=>{
      return <Cards props={e} isLoaded={isLoaded} handleImageLoad = {handleImageLoad} />;
      })}

    </div>
  );
}

export default Categories