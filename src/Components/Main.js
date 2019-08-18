// import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

// import PhotoWall from "./Photowall";
// import Title from "./Title";
// import AddPhoto from "./AddPhoto";
// import { removePost } from "../redux/actions";
// import Single from "../Components/Single";

// class Main extends Component {
//   constructor() {
//     super();
//     // this.state = {
//     //   posts: [
//     //     {
//     //       id: 0,
//     //       description: "description 0",
//     //       imageLink:
//     //         "https://image.shutterstock.com/image-vector/man-sitting-on-big-laptop-260nw-753972046.jpg"
//     //     },
//     //     {
//     //       id: 1,
//     //       description: "description 1",
//     //       imageLink:
//     //         "https://image.shutterstock.com/image-vector/isometric-vector-illustration-young-programmer-260nw-1060094186.jpg"
//     //     },
//     //     {
//     //       id: 2,
//     //       description: "description 2",
//     //       imageLink:
//     //         "https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6291.jpg?size=626&ext=jpg"
//     //     }
//     //   ]
//     // };
//     // this.removePhoto = this.removePhoto.bind(this);
//   }

//   // removePhoto(photoToRemove) {
//   //   console.log(photoToRemove.description);
//   //   this.setState(state => ({
//   //     posts: state.posts.filter(post => post !== photoToRemove)
//   //   }));
//   // }

//   // addPhoto(postSubmitted) {
//   //   this.setState(state => ({
//   //     posts: state.posts.concat([postSubmitted])
//   //   }));
//   // }

//   // componentDidMount() {
//   //   this.props.removePost(1);
//   // }

//   componentDidMount() {
//     this.props.startLoadingPost();
//     this.props.startLoadingComments();
//   }

//   render() {
//     console.log(this.props);

//     return (
//       <div>
//         <h1>
//           <Link to="/">PhotoWall</Link>
//         </h1>
//         <Route
//           exact
//           path="/"
//           render={() => (
//             <div>
//               {/* <Title title={"Photowall"} /> */}
//               <PhotoWall
//                 // posts={this.props.posts}
//                 // onRemovePhoto={this.removePhoto}
//                 {...this.props}
//               />
//             </div>
//           )}
//         />

//         {/* <Route path="/addPhoto" component={AddPhoto} /> */}

//         <Route
//           path="/addPhoto"
//           render={({ history }) => (
//             <div>
//               <AddPhoto {...this.props} onHistory={history} />
//             </div>
//           )}
//         />
//         <Route
//           path="/single/:id"
//           render={params => <Single {...this.props} {...params} />}
//         />
//       </div>
//     );
//   }
// }

// export default Main;

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Title from "./Title";
import PhotoWall from "./Photowall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

class Main extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <Title title="Photowall" />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route path="/AddPhoto" render={() => <AddPhoto {...this.props} />} />

        <Route
          path="/single/:id"
          render={params => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }
}

export default Main;
