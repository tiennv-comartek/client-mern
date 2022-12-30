import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPosts, action.payload);
    yield put(actions.createPosts.createPostsSuccess(post.data));
    yield put(actions.hideModal());
  } catch (err) {
    yield put(actions.createPosts.createPostsFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatePost = yield call(api.updatePosts, action.payload);
    yield put(actions.updatePosts.updatePostsSuccess(updatePost.data));
  } catch (err) {
    console.log(err);
    yield put(actions.updatePosts.updatePostsFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga);
  yield takeLatest(actions.updatePosts.updatePostsRequest, updatePostSaga);
}

export default mySaga;
