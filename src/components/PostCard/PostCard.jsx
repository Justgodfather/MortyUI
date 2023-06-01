import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const PostCard = ({ card }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1%", width: "20%" }}>
      <CardMedia
        sx={{ height: "320px" }}
        image={card.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
