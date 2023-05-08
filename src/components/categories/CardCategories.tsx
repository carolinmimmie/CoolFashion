import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { ICardCategories } from "../../interfaces";

interface IProps {
  // categoryList: ICardCategories;
  category: string;
}
const CardCategories = ({ category }: IProps) => {
  return (
    <div className="test">
      <Card sx={{ width: 0, mb: 1, mt: 1 }}>
        <CardMedia
          sx={{ height: 320 }}
          className="categoriescard"
          image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"
          // image="../../images/categoriesimg.png"

          title="green iguana"
        />
        <CardContent
          sx={{
            height: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography gutterBottom component="div" sx={{ fontsize: "20px" }}>
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: -1 }}>
            kategori
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardCategories;
