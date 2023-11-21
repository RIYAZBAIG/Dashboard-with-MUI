import React from 'react';
import {Grid, Card,CardContent} from "@material-ui/core"
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import FourKIcon from '@mui/icons-material/FourK';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
const Icons = () => {
  return (
    <div style={{ marginLeft: '175px', marginTop: '50px' }}>

      <Grid>
        <Card>
            <CardContent>
            <h1>Hello Icons team</h1>
            <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={4}>
        <Typography>Filled</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteIcon />
        <DeleteForeverIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Outlined</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteOutlinedIcon />
        <DeleteForeverOutlinedIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Rounded</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteRoundedIcon />
        <DeleteForeverRoundedIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Two Tone</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteTwoToneIcon />
        <DeleteForeverTwoToneIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Sharp</Typography>
      </Grid>
      <Grid item xs={8}>
        <DeleteSharpIcon />
        <DeleteForeverSharpIcon />
      </Grid>
      <Grid item xs={4}>
        <Typography>Edge-cases</Typography>
      </Grid>
      <Grid item xs={8}>
        <ThreeDRotationIcon />
        <FourKIcon />
        <ThreeSixtyIcon />
      </Grid>
    </Grid>
            </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Icons;