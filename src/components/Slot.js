import React ,{useState} from 'react'
import "./Slot.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { Button } from '@mui/material';
import axios from "axios"
//import { Card, CardContent, Typography, RadioGroup, Radio } from "@mui/material";
//import {useParams} from "react-router-dom"

const Slot = () => {
  const docDetails = JSON.parse(localStorage.getItem("doctor"));
  const patientId = JSON.parse(localStorage.getItem("userId"));
  // const {cardData} = useParams()
  // console.log(cardData);
  //const [slotTime, setSlotTime] = useState()
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [slotDetails,setSlotDetails] = useState({
    doctorId : "",
    patientId : "",
    doctorName:"",
    slotTime : ""
  })

  const slotBook = (data) => {
    setSlotDetails({
     doctorId : docDetails._id,
     doctorName: docDetails.doctorName,
     patientId :patientId,
     slotTime : data
  
    })
    setShowConfirmation(true);
    
  }
  const handleConfirmBooking = () => {
    alert("Appointment booked successfully!");
    axios.put("http://localhost:4000/book",slotDetails).then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
    setShowConfirmation(false);
    console.log(slotDetails);
  };

  const handleCancelBooking = () => {
    setShowConfirmation(false);
  };
  return (
    <>
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>
              Are you sure you want to book an appointment with{" "}
              {slotDetails.doctorName} at {slotDetails.slotTime}?
            </p>
            <br />
            <br />
            <div className="button-container">
              <button onClick={handleConfirmBooking}>Yes</button>
              <button onClick={handleCancelBooking}>No</button>
            </div>
          </div>
        </div>
      )}
      <div className="card">
        <div className="card-content">
          <FontAwesomeIcon icon={faUserDoctor} className="icon" />
          <br /> <br />
          <h2 className="card-title">
            Name Of Specialist : {docDetails.doctorName}
          </h2>
          <h3 className="card-description">
            Specialization : {docDetails.category}
          </h3>
          <h3 className="card-description">
            Qualification : {docDetails.degree}
          </h3>
          <h3 className="card-description">
            Conract No : {docDetails.contactNo}
          </h3>
          <div>
            {docDetails &&
              docDetails.slot.map((data) => {
                return <Button onClick={() => slotBook(data.time)}>{data.time}</Button>;
              })}

            {/* <div className="notification">
              <h2>{slotDetails.slotTime}</h2>
              <h2>{slotDetails.doctorId}</h2>
            </div> */}

            {/* {docDetails &&
              docDetails.slot.map((data) => {
                return (
                  <div className="card-radio">
                    <input type="radio" name="card-radio" id={data} />
                    <label for={data}>{data}</label>
                  </div>
                );
              })} */}
          </div>
          <div className="card-buttons" type="button" id="book">
            Book Appointment
          </div>
        </div>
      </div>
    </>
  );
}

export default Slot