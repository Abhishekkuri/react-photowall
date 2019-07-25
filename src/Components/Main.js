import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import Title from "./Title";

const posts = [
  {
    id: 0,
    description: "description 0",
    imageLink:
      "https://image.shutterstock.com/image-vector/man-sitting-on-big-laptop-260nw-753972046.jpg"
  },
  {
    id: 1,
    description: "description 1",
    imageLink:
      "https://image.shutterstock.com/image-vector/isometric-vector-illustration-young-programmer-260nw-1060094186.jpg"
  },
  {
    id: 2,
    description: "description 2",
    imageLink:
      "https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6291.jpg?size=626&ext=jpg"
  }
];

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <PhotoWall posts={posts} />
      </div>
    );
  }
}

export default Main;
