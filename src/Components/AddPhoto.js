// import React, { Component } from "react";

// class AddPhoto extends Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const imageLink = event.target.elements.link.value;
//     const description = event.target.elements.description.value;
//     const post = {
//       id: Number(new Date()),
//       imageLink: imageLink,
//       description: description
//     };
//     if (imageLink && description) {
//       // this.props.onAddPhoto(post);
//       // this.props.addPost(post);
//       this.props.startAddingPost(post);
//       this.props.onHistory.push("/");
//     }
//   }

//   render() {
//     return (
//       <div>
//         {/* <h1>Photowall</h1> */}
//         <div className="form">
//           <form onSubmit={this.handleSubmit}>
//             <input type="text" placeholder="Link" name="link" />
//             <input type="text" placeholder="Description" name="description" />
//             <button>Post</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddPhoto;

import React, { Component } from "react";

export default class AddPhoto extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { history, startAddingPost } = this.props;
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = { id: Number(new Date()), description, imageLink };
    imageLink &&
      description &&
      // addPost(post) &&
      startAddingPost(post) &&
      history.push("/");
  };

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}
