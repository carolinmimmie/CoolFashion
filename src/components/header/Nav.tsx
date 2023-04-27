import { alpha, AppBar, Box, Button, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemText, styled, Toolbar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = ['Women/men', 'Products', 'bestsellers', 'Sale'];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Nav = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  
  const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };


   const drawer = ( 
        <div>
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        C0oL FaSHiON
      </Typography>
      <Divider />
     <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            
              <ListItemText primary={item} />
    
          </ListItem>
        ))} 
      </List>
    </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: "none" }, flexGrow: {}}}
          >
            <MenuIcon /> 
          </IconButton>

        
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.05, display: { xs: 'none', sm: 'block'  } }}
            className="Logga"
          >
          COOL FASHION
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: "block" }, flexGrow: {sm: 1}}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          
          <Box className="boxserchandicon" sx={{}}>
          <Search sx={{display: {xs: "none", sm: "none", md: "block"}}} >
            <SearchIconWrapper>
            <SearchIcon /> 
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Sök produkter"
              inputProps={{ 'aria-label': 'search' }}
              className="serchfield"
             
            />
          </Search>
          <Box sx={{margin: "auto"}}> 
            <FavoriteBorderIcon sx={{ml: 2}}/>
            <PersonOutlineIcon sx={{ml: 2}}/>
            <WorkOutlineIcon sx={{ml: 2}}/>
           
          </Box>
          </Box>
        
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      </Box>

  )
}

export default Nav