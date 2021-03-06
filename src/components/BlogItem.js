import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function BlogItem(props) {
    const [form, setForm] = useState({
        title: "",
        body: "",
        author: "",
      });
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.blog.body}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {props.blog.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
