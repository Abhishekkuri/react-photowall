// import React, { Component } from "react";
// import Photo from "../Components/Photo";
// import "../Styles/stylesheet.css";

// class Comments extends Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const comment = event.target.elements.comment.value;
//     this.props.startAddingComment(comment, this.props.id);
//     event.target.elements.comment.value = "";
//   }

//   render() {
//     return (
//       <div className="comment">
//         {this.props.comments.map((comment, index) => {
//           return <p key={index}>{comment}</p>;
//         })}
//         <form className="comment-form" onSubmit={this.handleSubmit}>
//           <input type="text" placeholder="comment" name="comment" />
//           <input type="submit" placeholder="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Comments;

import React, { Component } from "react";

export default class Comments extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    let comment = ev.target.comment.value;
    const { addComment, id } = this.props;
    addComment(id, comment);
    ev.target.comment.value = "";
  };

  render() {
    return (
      <div>
        {this.props.comments.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
