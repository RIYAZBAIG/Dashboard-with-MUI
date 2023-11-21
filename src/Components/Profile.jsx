import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid, CardHeader } from '@mui/material';

const Profile = () => {
  const profilePictureUrl = 'https://tse1.mm.bing.net/th?id=OIP.EVCGXvrjsvMrhfOX3su_FgHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109';

  return (
    <div style={{marginTop:"125px", marginLeft:"250px"}} >

    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Avatar src={profilePictureUrl} alt="Johnatan Smith" sx={{ width: 100, height: 100 }} />
              <Typography variant="h5">Smith Mane</Typography>
              <Typography variant="subtitle1">Full Stack Developer</Typography>
              <Typography variant="body1">Junggi Area, Gorakhpur Up, CA</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} style={{marginBottom:"25px"}} >
          <Card>
            <CardContent>
              <Typography variant="h6">
              
                <Card
      elevation={3}
      sx={{
        borderRadius: 2,
        margin: 1,
      }}
    >
      <CardHeader title="Assignment Project Status" />
      <CardContent>
        <Typography variant="h6">Web Design</Typography>
        <Typography variant="body1">Website Markup</Typography>
        <Typography variant="body1">One Page</Typography>
        <Typography variant="body1">Mobile Template</Typography>
        <Typography variant="body1">Backend API</Typography>
      </CardContent>
    </Card>
              </Typography>
              {/* Add your progress or other details here */}
            </CardContent>
          </Card>
        </Grid>

      
      </Grid>
    </Box>
    </div>

  );
};

export default Profile;
