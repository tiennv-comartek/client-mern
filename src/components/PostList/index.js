import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

function PostList(props) {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  React.useEffect(() => {
    dispatch(action.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <Grid container spacing={2} alignItems={"stretch"}>
      {posts.map((post, key) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
