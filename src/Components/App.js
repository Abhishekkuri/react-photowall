// import { connect } from "react-redux";
// import Main from "./Main";
// import { bindActionCreators } from "redux";
// // import { removePost } from "../redux/actions";
// import * as actions from "../redux/actions";
// import { withRouter } from "react-router";

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   };
// }

// function mapDispatchToProps(dispatch) {
//   // return bindActionCreators({ removePost }, dispatch);
//   return bindActionCreators(actions, dispatch);
// }

// const App = withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Main)
// );

// export default App;
import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import {
  removePost,
  addPost,
  addComment,
  startAddingPost,
  startLoadingPost,
  loadPosts,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
  loadComments
} from "../redux/actions";

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removePost,
      addPost,
      addComment,
      startAddingPost,
      startLoadingPost,
      loadPosts,
      startRemovingPost,
      startAddingComment,
      startLoadingComments,
      loadComments
    },
    dispatch
  );

const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

export default App;
