import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

//MUI Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import { Button, CardActionArea, CardActions } from "@mui/material";

const SongCard = ({ title, music, link, albumImg, albumTitle }) => {
  //Quitar Parentesis de descripciones
  let modifiedAlbum;
  if (albumTitle.includes("(")) {
    let splitedAlbum = albumTitle.split("");
    let parentesisPosition = splitedAlbum.indexOf("(");
    modifiedAlbum = splitedAlbum.splice(0, parentesisPosition).join("");
  } else {
    modifiedAlbum = albumTitle;
  }

  //Audios
  const audioTrack = new Audio(music);

  const playSong = () => {
    audioTrack.play();
  };

  const pauseSong = () => {
    audioTrack.pause();
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 500, backgroundColor: "#8685EF" }}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={albumImg} alt={title} />
          <CardContent>
            <Typography gutterBottom color="text.contrastText" variant="h6" component="div">
              {title}
            </Typography>

            <Typography variant="body2" color="text.contrastText">
              {modifiedAlbum}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ justifyContent: "space-around" }}>
          <IconButton
            onClick={playSong}
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <PlayArrowIcon />
          </IconButton>

          <IconButton
            onClick={pauseSong}
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <PauseIcon />
          </IconButton>

          <Button size="small" color="secondary">
            <Link color="secondary" href={link} target="_blank" rel="noreferrer">
              See More...
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SongCard;
