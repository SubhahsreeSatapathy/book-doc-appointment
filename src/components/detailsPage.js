import React from 'react'
import {useNavigate} from "react-router-dom"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Details.css"

const DetailsPage = ({data}) => {
// const [clickedCard, setClickedCard] = useState(null);
var navigate = useNavigate();
 function handleClick() {
    //setClickedCard(data._id)
    console.log('===================================='); 
    console.log(data);
    console.log('====================================');
   localStorage.setItem("doctor", JSON.stringify(data));

  //  navigate("/slot",{
  //   cardData : clickedCard
  //  });

  navigate("/slot")
 }
//console.log(data);
  return (
    <>
      <Card className="doctor" onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {data.doctorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {data.contactNo}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {data.degree}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Book Slot
          </Button>
        </CardActions>
      </Card>
      
    </>
  );
}

export default DetailsPage