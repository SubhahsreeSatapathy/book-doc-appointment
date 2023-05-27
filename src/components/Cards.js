import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import { CardMedia } from '@mui/material';
import "./Cards.css"
import { useNavigate } from 'react-router-dom';


const Cards = (props) => {
  var navigate = useNavigate()
  const redirect = () => {
    navigate("/details")
  }


  return (
    <div>
      <Card
        sx={{ maxWidth: 200, height: 275 }}
        className="cards"
        onClick={redirect}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="120"
            width="100"
            color="#e34086"
            image={props.img}
            alt="LOgo"
          />
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "blue", fontWeight: "bold", fontSize: "19px" }}
          >
            {props.heading}
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