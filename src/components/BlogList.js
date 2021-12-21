import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BlogItem from "./BlogItem";
export default function BlogList(props) {
  return (
    <Grid container spacing={3}>
      {props.list.map((blog) => (
        <Grid key={blog.id} item xs={12} sm={6} md={4} lg={3}>
          <BlogItem blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
}
