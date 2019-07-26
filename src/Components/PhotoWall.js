import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Photo from "./Photo";

const PhotoWall = props => {
  return (
    <div>
      <Link className="addIcon" to="/addPhoto" />
      <div className="photoGrid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;
