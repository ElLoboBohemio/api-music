import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ArtistInfo = ({ name, picture }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={picture}
        alt={`${"Loading..." || name}`}
        style={{ width: 300, height: "100%", borderRadius: "50%" }}
      />
      <Typography
        gutterBottom
        sx={{ fontWeight: "bold" }}
        color="primary"
        variant="h3"
        component="h1"
      >
        {name}
      </Typography>
    </Box>
  );
};

export default ArtistInfo;
