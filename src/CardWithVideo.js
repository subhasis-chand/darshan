import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ReactPlayer from "react-player/lazy";

const CardWithVideo = ({
	iconImage,
	title,
	subheader,
	videoURL,
	description
}) => {
	return(
		<Card style={{ color: '#3e2200', marginBottom: '20px' }}>
        <CardHeader
          avatar={
            <div style={{
              height: '60px',
              width: '60px',
              borderRadius: '30px',
              boxSizing: 'border-box',
              border: '1px solid coral',
              overflow: 'hidden'
            }}>
              <img
                src={iconImage}
								alt='icon'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          }
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subheader}
        />
        <ReactPlayer
          url={videoURL}
          loop={true}
          controls={true}
          // height={"100%"}
          width={"100%"}
          playbackRate={1}
          muted={false}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
	);
}

export default CardWithVideo;
