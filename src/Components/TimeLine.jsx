import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Source } from '@mui/icons-material';

const TimeLineComponent = () => {
  const [timelineItems, setTimelineItems] = React.useState([]);

  const fetchTimelineItems = async () => {
    setTimelineItems([
      {
        id: 1,
        title: ' B K  Mina  uploaded new photos',
        timestamp: '2 days ago',
        mediaType: 'image',
      },
      {
        id: 2,
        title: 'Mr. Majnoo shared a video',
        timestamp: '3 days ago',
        mediaType: 'video',
        videoId: '3bCKdgSSw20',
      },
    ]);
  };

  React.useEffect(() => {
    fetchTimelineItems();
  }, []);

  return (
    <div style={{ marginLeft: '175px', marginTop: '50px' }}>

    <Grid container spacing={3}>
      {timelineItems.map((timelineItem) => (
        <Grid item key={timelineItem.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{timelineItem.title}</Typography>
              <Typography variant="subtitle2">{timelineItem.timestamp}</Typography>

              {timelineItem.mediaType === 'image' && (
                <img src={timelineItem.imageUrl} alt={timelineItem.title} />
              )}

              {timelineItem.mediaType === 'video' && (
                <iframe
                  onClick={() => {
                    const iframe = document.getElementById(`video-${timelineItem.id}`);
                    iframe.src = `https://www.youtube.com/embed/${timelineItem.videoId}?autoplay=1`;
                  }}
                  id={`video-${timelineItem.id}`}
                  src={`https://www.youtube.com/embed/${timelineItem.videoId}`}
                  width="560"
                  height="315"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video"
                />
              )}
            </CardContent>
          </Card>
         
        </Grid>
        
        
      ))}
    </Grid>
    <Grid item xs={6}>
           <Card>
            <CardContent>
                <video controls>
                    <Source src="video.webm" type="video/webm" />
                    <Source src="video.mp4" type="video/mp4" />
                    <track src='subtitle.vtt' kind='subtitles'/>
                    <p>
                    Your Browser dosn't suppot HTML5 video.

                    </p>
                </video>
            </CardContent>
           </Card>
            
            </Grid>
    </div>
  );
};

export default TimeLineComponent;
