import React, { Component } from "react";
import { Route } from "react-router-dom";

import PhotoWall from "./PhotoWall";
import Title from "./Title";
import AddPhoto from "./AddPhoto";

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

  addPhoto(postSubmitted) {
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
              />
            </div>
          )}
        />

        {/* <Route path="/addPhoto" component={AddPhoto} /> */}

        <Route
          path="/addPhoto"
          render={({ history }) => (
            <div>
              <AddPhoto
                onAddPhoto={addedPost => {
                  this.addPhoto(addedPost);
                  history.push("/");
                }}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
