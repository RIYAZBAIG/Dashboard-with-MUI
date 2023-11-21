import React,{useState} from 'react';
import { Grid, Card, CardContent } from '@mui/material';

const Commerce = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ marginLeft: '220px', marginTop: '50px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              '&:hover': {
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardContent>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.lk6p0wdggUQItz8QwCHyIQHaHa&pid=Api&P=0&h=180"
                height="200px"
                width="150px"
                alt="Product 1"
              />
              <p>LOWA Men’s Renegade GTX Mid Hiking Boots Review</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
        <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              '&:hover': {
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardContent>
              <img
                src="https://m.media-amazon.com/images/I/21MK2LvSoQL._AC_UL480_FMwebp_QL65_.jpg"
                height="200px"
                width="150px"
                alt="Product 2"
              />
              <p>LOWA Girl’s Renegade GTX Mid Hiking kidswear Review</p>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              '&:hover': {
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <CardContent>
              <img
                src="https://m.media-amazon.com/images/I/51S+8dJ5F9L._AC_UL480_FMwebp_QL65_.jpg"
                height="200px"
                width="150px"
                alt="Product 3"
              />
              <p>LOWA Girl’s Renegade GTX Mid Hiking kidswear Review</p>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Commerce;
