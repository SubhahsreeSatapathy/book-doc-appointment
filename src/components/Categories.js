import React from 'react'
import Cards from "./Cards";
import "./Home.css";
import { Grid } from "@mui/material";
import Cardiology from "../assets/cards/cardiology.jpg";
import Dermatology from "../assets/cards/Derma.png";
import Neurology from "../assets/cards/neuro.png";
import Radiology from "../assets/cards/radiology.webp";
import Oncology from "../assets/cards/radio.avif";
import Pediatric from "../assets/cards/pedia.jpg";

const Categories = () => {
  return (
    <div className="card-container">
      <Grid container spacing={2} className="grid">
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
      </Grid>
    </div>
  );
}

export default Categories