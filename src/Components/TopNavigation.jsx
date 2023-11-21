import React, { useState } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReusableCard from './ReusableCard';
const useStyles = makeStyles((theme) => ({
  // ... your existing styles
}));

function TopNavigation() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  return (
    <>
    
      <div className="card-row" style={{ marginLeft: '110px', marginTop: '50px' }}>
        <ReusableCard
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          image="https://tse1.mm.bing.net/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&pid=Api&P=0&h=180"
          content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />

        <ReusableCard
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          image="https://tse2.mm.bing.net/th?id=OIP.nYEuBjiuwCD6oR2JeVu5DwHaEK&pid=Api&P=0&h=180"
          content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
        <ReusableCard
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          image="https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
          content="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
          expanded={expanded}
          handleExpandClick={handleExpandClick}
        />
        {/* ... additional cards */}
      </div>
    </>
  );
}

export default TopNavigation;
