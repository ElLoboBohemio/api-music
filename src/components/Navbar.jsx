//Redux
import { useDispatch } from "react-redux";
import { apiActions } from "../store/index";

//Scrolling
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

//Styling
import { styled, alpha } from "@mui/material/styles";

//MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.contrastText, 0.4),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.contrastText, 0.25),
  },
  width: "50%",
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  //Redux to save data from API
  const dispatch = useDispatch();

  const addToState = (inputValue) => {
    dispatch(apiActions.addToState(inputValue));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { inputId } = e.target.elements;
    const inputIdValue = inputId.value;
    addToState(inputIdValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Music API🎵
            </Typography>
            <Search>
              <form onSubmit={submitHandler}>
                <Input
                  id="inputId"
                  fullWidth
                  placeholder="Song, artist..."
                  aria-label="search"
                  sx={{ color: "#ffffff", paddingLeft: 2 }}
                />
                <button style={{ display: "none" }} type="submit">
                  Submit
                </button>
              </form>
            </Search>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default Navbar;
