import React from "react";
import { Container, Fab } from "@material-ui/core";
import Header from "../components/Header";
import PostList from "../components/PostList";
import AddIcon from "@material-ui/icons/Add";
import useStyle from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

export default function HomePage() {
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={useStyle().fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
