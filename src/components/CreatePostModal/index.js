import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyle from "./style";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import { createPosts } from "../../redux/actions";

function CreatePostModal(props) {
  const { isShow } = useSelector(modalState$);
  const classes = useStyle();
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });

  const onSubmit = React.useCallback(() => {
    dispatch(createPosts.createPostsRequest(data));
  }, [data, dispatch]);

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          placeholder="Content..."
          value={data.content}
          minRows={10}
          maxRows={15}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}

export default CreatePostModal;
