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
      <div className="container-fluid">
        <div className="comment-section">
          <h4 className="ms-2"> Comments</h4>
          {comments.map((comment, index) => {
            return (
              <div key={index}>
                <label className="ms-2">{comment.CommentBy}</label>
                <div className="comment">{comment.CommentText}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommentsComponent;
