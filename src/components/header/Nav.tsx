import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BasicMenu from "./BasicMenu";
import { getAllProducts } from "../../Api";
import { IAllProducts } from "../../interfaces";
import Context from "../../context/Context";
import Cart from "./Cart";

interface Props {
  window?: () => Window;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const drawerWidth = 240;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Nav = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const { searchTerm, setSearchTerm, searchResults, showResults } =
    useContext(Context);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Link className="hamburger-link-div" to={"/"}>
          <ListItemText
            primary={
              <Typography variant="h6" sx={{ my: 2 }}>
                COOL FASHION
              </Typography>
            }
          />
        </Link>

        <Divider />
        <List sx={{ ml: 2 }}>
          <ListItem disablePadding>
            <ListItemText primary={`Produkter`} />
            <BasicMenu></BasicMenu>
          </ListItem>

          <ListItem disablePadding>
            <Link className="hamburger-link-div" to={"contact"}>
              <ListItemText primary={`Kontakta Oss`} />
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link className="hamburger-link-div" to={"admin"}>
              <ListItemText primary={`Admin`} />
            </Link>
          </ListItem>
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar className="nav-container">
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { sm: "block", md: "none" },
                  flexGrow: 0,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box className="nav-container-links-and-h1">
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    flexGrow: 0.05,
                    display: { xs: "block", sm: "block" },
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  <Link className="logga" to={"/"}>
                    COOL FASHION
                  </Link>
                </Typography>
                <Link to={"/"}>
                  <BasicMenu></BasicMenu>
                </Link>

                <Link to={"contact"} className="link-div">
                  Kontakta Oss
                </Link>
                <Link to={"admin"} className="link-div">
                  Admin
                </Link>
              </Box>
            </div>

            <Box className="boxserchandicon" sx={{}}>
              <Search sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Sök produkter"
                  inputProps={{ "aria-label": "search" }}
                  className="serchfield"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Search>
              <Box sx={{ margin: "auto" }}>
                <Link to={"myfavorites"} className="icon-link">
                  <FavoriteBorderIcon sx={{ ml: 2 }} />
                </Link>
                <PersonOutlineIcon sx={{ ml: 2 }} />

                <WorkOutlineIcon sx={{ ml: 2 }} />
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.6rem",
                    height: "1.6rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(-50%, -125%)",
                  }}
                >
                  {/* {{cartQuantity}}4 */}15
                </div>
              </Box>
            </Box>
          </Toolbar>
          <Box
            className="serchfieldxsscreen"
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          >
            <Search sx={{}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Sök produkter"
                inputProps={{ "aria-label": "search" }}
                className="serchfield"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Search>
          </Box>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      {showResults && (
        <div className="search_results">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      width="30"
                      height="30"
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price} kr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Nav;
