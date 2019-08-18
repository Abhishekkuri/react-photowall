// import { database } from "../Database/config";

// export const startAddingPost = post => dispatch =>
//   database
//     .ref("posts")
//     .update({ [post.id]: post })
//     .then(() => {
//       dispatch(addPost(post));
//     })
//     .catch(error => console.log(error));

// export function startLoadingPost() {
//   return dispatch => {
//     return database
//       .ref("posts")
//       .once("value")
//       .then(snapshot => {
//         let posts = [];
//         snapshot.forEach(childSnapshot => {
//           posts.push(childSnapshot.val());
//         });
//         dispatch(loadPosts(posts));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// export function startRemovingPost(index, id) {
//   return dispatch => {
//     return database
//       .ref(`posts/${id}`)
//       .remove()
//       .then(() => {
//         dispatch(removePost(index));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// export function startAddingComment(comment, postId) {
//   return dispatch => {
//     return database
//       .ref("comments/" + postId)
//       .push(comment)
//       .then(() => {
//         dispatch(addComment(comment, postId));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// export function startLoadingComments() {
//   return dispatch => {
//     return database
//       .ref("comments")
//       .once("value")
//       .then(snapshot => {
//         let comments = {};
//         snapshot.forEach(childSnapshot => {
//           comments[childSnapshot.key] = Object.values(childSnapshot.val());
//         });
//         dispatch(loadComments(comments));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// //these functions are action creaters
// export function removePost(index) {
//   return {
//     type: "REMOVE_POST", //this is identifier to the action
//     index: index //information passed throught states. keep it minimal always
//   };
// }
// export function addPost(post) {
//   return {
//     type: "ADD_POST",
//     post
//   };
// }

// export function addComment(comment, postId) {
//   return {
//     type: "ADD_COMMENT",
//     comment,
//     postId
//   };
// }

// export function loadComments(comments) {
//   return {
//     type: "LOAD_COMMENTS",
//     comments
//   };
// }

// export function loadPosts(posts) {
//   return {
//     type: "LOAD_POSTS",
//     posts
//   };
// }
import { database } from "../Database/config";

export const startAddingPost = post => dispatch =>
  database
    .ref("posts")
    .update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch(error => console.log(error));

export const startAddingComment = (id, comment) => dispatch =>
  database
    .ref(`comments/${id}`)
    .push(comment)
    .then(() => {
      dispatch(addComment(id, comment));
    })
    .catch(error => console.log(error));

export const startLoadingComments = () => dispatch =>
  database
    .ref("comments")
    .once("value")
    .then(snapshot => {
      let comments = {};
      snapshot.forEach(childSnapshot => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val());
      });
      dispatch(loadComments(comments));
    })
    .catch(error => console.log(error));

export const startLoadingPost = () => dispatch =>
  database
    .ref("posts")
    .once("value")
    .then(snapshot => {
      let posts = [];
      snapshot.forEach(childSnapshot => {
        posts.push(childSnapshot.val());
      });
      dispatch(loadPosts(posts));
    })
    .catch(error => console.log(error));

export const startRemovingPost = id => {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null
  };
  return dispatch =>
    database
      .ref()
      .update(updates)
      .then(() => dispatch(removePost(id)))
      .catch(error => console.log(error));
};
//remove post
export const removePost = index => ({
  type: "REMOVE_POST",
  index
});
//add post
export const addPost = post => ({
  type: "ADD_POST",
  post
});
//add comment
export const addComment = (id, comment) => ({
  type: "ADD_COMMENT",
  id,
  comment
});
//load posts
export const loadPosts = posts => ({
  type: "LOAD_POSTS",
  posts
});
//load comments
export const loadComments = comments => ({
  type: "LOAD_COMMENTS",
  comments
});
