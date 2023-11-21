import React from "react";
import { Card, CardActions, Button, CardMedia } from "@mui/material";
import "./Common.css";

const FixedSideBar = () => {
  return (
    <>
    <div className="Card123" style={{marginLeft:"175px" , marginTop:"50px"}}>

    <Card  >
      <CardMedia
        component="img"
        image="https://example.com/image.jpg"
        alt="My image"
        />
      <h2>Title</h2>
      <p>This is the content of my card.</p>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    </>

  );
};

export default FixedSideBar;
