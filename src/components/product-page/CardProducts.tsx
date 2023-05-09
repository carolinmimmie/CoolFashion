import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const CardProducts = () => {
  return (
    <Box className='product' sx={{mt: 15, display: "flex", justifyContent: "center" , }}>
  <Card sx={{ maxWidth: 180, mb: 1, mt: 1}}>
      <CardMedia
        sx={{ height: 230 }}
        className= "categoriescard"
        image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"
        // image="../../images/categoriesimg.png"
    
        title="green iguana"
      />
      <CardContent sx={{ml: -1, height: 20 , display: "flex" , flexDirection: "column", justifyContent: "center"}}>
        <Typography gutterBottom component="div" sx={{fontsize: "20px" }}>
          Vera hoodie
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{mt: -1, ml: 0.2 }}>
          399 kr
        </Typography>
        </CardContent>
    </Card>

    </Box>

  )
}

export default CardProducts