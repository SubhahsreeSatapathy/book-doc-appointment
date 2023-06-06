import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cardiology from "../assets/cards/cardiology.jpg";
import Dermatology from "../assets/cards/Derma.png";
import Neurology from "../assets/cards/neuro.png";
import Radiology from "../assets/cards/radiology.webp";
import Oncology from "../assets/cards/radio.avif";
import Pediatric from "../assets/cards/pedia.jpg";


import { CardMedia } from '@mui/material';
import "./Cards.css"
import { useNavigate } from 'react-router-dom';



const Cards = ({props,isLoaded,handleImageLoad}) => {
  
  var navigate = useNavigate()
  const redirect = (e) => {
   localStorage.setItem("category", JSON.stringify(e.category));
    navigate("/details")
    //console.log(e)
  }
  //console.log(props)
  
  return (
    <div onClick={() => redirect(props)}>
      <Card
        sx={{ maxWidth: 200, height: 275 }}
        className="cards"
        onClick={redirect}
      >
        <CardContent>
          {isLoaded ? (<CardMedia
            component="img"
            height="120"
            width="100"
            color="#e34086"
            img={props.image}
            alt="Logo"
            onLoad = {handleImageLoad}
          />) : null}
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "blue", fontWeight: "bold", fontSize: "19px" }}
          >
            {props.category}
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={redirect}>
            Doctors
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards