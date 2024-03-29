// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const Photo = props => {
//   const post = props.post;
//   return (
//     <figure className="figure">
//       <Link to={`single/${post.id}`}>
//         <img className="photo" src={post.imageLink} alt={post.description} />
//       </Link>
//       <figcaption>
//         <p>{post.description}</p>
//       </figcaption>
//       <div className="button-container">
//         <button
//           onClick={() => {
//             // props.onRemovePhoto(post);
//             props.startRemovingPost(props.index, post.id);
//             props.history.push("/");
//           }}
//         >
//           Remove
//         </button>
//         <Link className="button" to={`single/${post.id}`}>
//           <div className="comment-count">
//             <div className="speech-bubble" />
//             {props.comments[post.id] ? props.comments[post.id].length : 0}
//           </div>
//         </Link>
//       </div>
//     </figure>
//   );
// };

// Photo.propTypes = {
//   post: PropTypes.object.isRequired
//   // onRemovePhoto: PropTypes.func.isRequired
// };

// export default Photo;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Photo = props => {
  const {
    post: { id, description, imageLink }
  } = props;
  const removeThisPhoto = () => {
    props.startRemovingPost(id);
    props.history.push("/");
  };
  return (
    <figure className="figure">
      <Link to={`/single/${id}`}>
        <img
          className="photo"
          src={imageLink}
          alt={description}
          title={description}
        />
      </Link>
      <figcaption>
        <p className="comment">{description}</p>
      </figcaption>
      <div className="button-container">
        <button onClick={removeThisPhoto}>Remove</button>
        <Link className="button" to={`/single/${id}`}>
          <div className="comment-count">
            <i className="speech-bubble" />
            {props.comments[id] ? props.comments[id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired
  // onRemovePhoto: PropTypes.func.isRequired,
};

export default Photo;
