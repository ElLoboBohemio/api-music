import { Suspense, lazy } from "react";

//Themes MUI
import { ThemeProvider } from "@mui/material/styles";
import ThemeConfig from "./ThemeConfig";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

//Components
const Navbar = lazy(() => import("./components/Navbar"));
const SongsList = lazy(() => import("./components/SongsList"));

const App = () => {
  return (
    <div style={{ backgroundColor: "#403F70" }}>
      <ThemeProvider theme={ThemeConfig}>
        <CssBaseline />
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                sx={{ fontWeight: "bold" }}
                color="primary"
                variant="h3"
                component="h1"
              >
                Loading...
              </Typography>
            </div>
          }
        >
          <Navbar />
          <SongsList />
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
