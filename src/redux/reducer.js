// import _posts from "../data/posts";
// import { combineReducers } from "redux";

// // const commentReducre = function comments(state = [], action) {
// function comments(state = {}, action) {
//   switch (action.type) {
//     case "ADD_COMMENT":
//       // return [...state, action.comment];
//       if (!state[action.postId]) {
//         return { ...state, [action.postId]: [action.comment] };
//       } else {
//         return {
//           ...state,
//           [action.postId]: [...state[action.postId], action.comment]
//         };
//       }
//     case "LOAD_COMMENTS":
//       return action.comments;
//     default:
//       return state;
//   }
//   return state;
// }

// // const postReducer = function Posts(state = posts, action) {
// function posts(state = _posts, action) {
//   switch (action.type) {
//     case "REMOVE_POST":
//       return [
//         ...state.slice(0, action.index),
//         ...state.slice(action.index + 1)
//       ];
//     case "ADD_POST":
//       return [...state, action.post];
//     case "LOAD_POSTS":
//       return action.posts;
//     default:
//       return state;
//   }
//   return state;
// }

// const rootReducer = combineReducers({ posts, comments });

// export default rootReducer;
import allPosts from "../data/posts";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.id]) {
        return { ...state, [action.id]: [action.comment] };
      } else {
        return {
          ...state,
          [action.id]: [...state[action.id], action.comment]
        };
      }

    case "LOAD_COMMENTS":
      return action.comments;

    default:
      return state;
  }
};

const posts = (state = allPosts, action) => {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter(post => post.id !== action.index);

    case "ADD_POST":
      return [...state, action.post];

    case "LOAD_POSTS":
      return action.posts;

    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
