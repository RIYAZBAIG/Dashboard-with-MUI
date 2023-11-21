import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '150px',
  },
  card: {
    maxWidth: 360,
    marginTop: -25,
    marginRight: 10,
    position: 'relative',
  },
  ribbon: {
    backgroundColor: 'skyblue',
    position: 'absolute',
    color: 'white',
    width: 150,
    zIndex: 3,
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 5,
    fontFamily: 'Lato, sans-serif',
    '&::before': {
      position: 'absolute',
      zIndex: -1,
      content: '',
      display: 'block',
      border: '5px solid #2980b9',
    },
    '&::after': {
      position: 'absolute',
      zIndex: -1,
      content: '',
      display: 'block',
      border: '5px solid #2980b9',
    },
    transform: 'rotate(-45deg)',
    top: 20,
    marginLeft: -40,
  },
  span: {},
});

export default function Ribbons() {
  const classes = useStyles();

  return (
   <>
   <div style={{marginTop:"-75px"}} >
   <div className={classes.root}>
      {[1, 2].map((index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <div className={classes.ribbon}>
              <span className={classes.span}>ribbon</span>
            </div>
            <CardMedia
              component="img"
              alt={`Contemplative Reptile ${index}`}
              height="140"
              image={index === 1 ? "https://adminlte.io/themes/v3/dist/img/photo1.png" : "https://adminlte.io/themes/v3/dist/img/photo3.jpg"}
              title={`Contemplative Reptile ${index}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard {index}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
    <div className={classes.root} >
      {[1, 2].map((index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <div className={classes.ribbon}>
              <span className={classes.span}>ribbon</span>
            </div>
            <CardMedia
              component="img"
              alt={`Contemplative Reptile ${index}`}
              height="140"
              image={index === 1 ? "https://adminlte.io/themes/v3/dist/img/photo2.png" : "https://adminlte.io/themes/v3/dist/img/photo3.jpg"}
              title={`Contemplative Reptile ${index}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard {index}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
   </div>
   </>
  );
}
