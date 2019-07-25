import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import Title from "./Title";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
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
      ]
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(photoToRemove) {
    console.log(photoToRemove.description);
    this.setState(state => ({
      posts: state.posts.filter(post => post !== photoToRemove)
    }));
  }

  render() {
    return (
      <div>
        <Title title={"Photowall"} />
        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}

export default Main;
