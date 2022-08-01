import { useEffect, useState, Suspense, lazy } from "react";

//Axios
import axios from "axios";

//Redux
import { useSelector } from "react-redux";

//MUI
import Grid from "@mui/material/Grid";

const ArtistInfo = lazy(() => import("./ArtistInfo"));
const SongCard = lazy(() => import("./SongCard"));

const SongsList = () => {
  //Selecciona el state de redux
  const apiData = useSelector((state) => state.data);

  //Local State para el fetched Data
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState([]);

  //Axios Fetch
  useEffect(() => {
    const getFetchData = async () => {
      try {
        const res = await axios.request({
          method: "GET",
          url: "https://deezerdevs-deezer.p.rapidapi.com/search",
          params: { q: apiData },
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "85c448f111msh04272552625dbf9p120744jsnbc8867f3b49b",
          },
        });
        const data = res.data.data;
        setSongs(data);
        setArtist(data[0].artist);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFetchData();
  }, [apiData]);

  console.log(artist);

  return (
    <>
      <br />
      <br />
      <br />

      <Suspense>
        <ArtistInfo name={artist.name} picture={artist.picture_medium} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 12, sm: 8, md: 12 }}
        >
          {songs.map((song, index) => (
            <SongCard
              key={index}
              title={song.title_short}
              link={song.link}
              music={song.preview}
              albumTitle={song.album.title}
              albumImg={song.album.cover}
            />
          ))}
        </Grid>
      </Suspense>
    </>
  );
};

export default SongsList;
