import { React, Component } from "react";
import { getComments } from "../../services/commentService";
import "./CommentsComponent.css";

class CommentsComponent extends Component {
  state = {
    teacherId: 0,
    comments: [],
  };

  async componentDidMount() {
    const { teacherId } = this.props;
    this.setState({ teacherId });
    const { data: comments } = await getComments(teacherId);
    this.setState({ comments });
  }

  render() {
    const { comments } = this.state;
    return (
      //   <div class="container mt-3 d-flex justify-content-center">
      //     <div class="row d-flex justify-content-center">
      //       <div class="col-md-8">
      //         <div class="text-left">
      //           <h6>Comments</h6>
      //         </div>
      //         <div class="card p-3 mb-2">
      //           <div class="d-flex flex-row">
      //             {" "}
      //             <div class="d-flex flex-column ms-2">
      //               {comments.map((comment, index) => {
      //                 return (
      //                   <div key={index}>
      //                     <label className="ms-2">{comment.CommentBy}</label>
      //                     <div className="text-primary">
      //                       {comment.CommentText}
      //                     </div>
      //                   </div>
      //                 );
      //               })}
      //             </div>
      //           </div>
      //           {/* <div class="d-flex justify-content-between"></div> */}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <h4 className="card"> Comments</h4>
          <div class="card comments-card p-3 mb-2">
            <div class="d-flex flex-row">
              <div class="d-flex flex-column ms-2">
                {comments.map((comment, index) => {
                  return (
                    <div key={index}>
                      <label className="ms">{comment.CommentBy}</label>
                      <div className="text-white ms-2">
                        {comment.CommentText}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsComponent;
