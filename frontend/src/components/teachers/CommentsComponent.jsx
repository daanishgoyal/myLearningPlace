import { React, Component } from "react";
import { getComments } from "../../services/commentService";
import "./CommentsComponent.css";

class CommentsComponent extends Component {
    state = {
        teacherId: 0,
        comments: [],
    };

    async componentDidMount() {
        try {
            const { teacherId } = this.props;
            this.setState({ teacherId });
            const { data: comments } = await getComments(teacherId);
            this.setState({ comments });
        } catch (error) {}
    }

    render() {
        const { comments } = this.state;
        return (
            //   <div className="container mt-3 d-flex justify-content-center">
            //     <div className="row d-flex justify-content-center">
            //       <div className="col-md-8">
            //         <div className="text-left">
            //           <h6>Comments</h6>
            //         </div>
            //         <div className="card p-3 mb-2">
            //           <div className="d-flex flex-row">
            //             {" "}
            //             <div className="d-flex flex-column ms-2">
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
            //           {/* <div className="d-flex justify-content-between"></div> */}
            //         </div>
            //       </div>
            //     </div>
            //   </div>

            <div
                className="container bg-dark
            "
            >
                <br />
                <div className="row justify-content-center">
                    <h4 className="card bg-secondary"> Comments</h4>
                    <div className="card comments-card p-3 mb-2 bg-dark -3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column ms-2">
                                {comments &&
                                    comments.map((comment, index) => {
                                        return (
                                            <div
                                                className="font-weight-bold comment-widgets"
                                                key={index}
                                            >
                                                <div className="container">
                                                    <h1 className="comments-title"></h1>
                                                    <div className="be-comment">
                                                        <div className="be-img-comment">
                                                            <a href="blog-detail-2.html">
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="be-ava-comment"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="be-comment-content">
                                                            <h4 className="  font-weight-bold text-primary  ">
                                                                {comment.CommentBy +
                                                                    " :"}
                                                            </h4>

                                                            <h6 className="  font-weight-bold text-info ">
                                                                {
                                                                    comment.CommentText
                                                                }
                                                            </h6>
                                                        </div>
                                                    </div>

                                                    {/* <h4 className="  font-weight-bold text-primary  ">
                                                        {comment.CommentBy +
                                                            " :"}
                                                    </h4>

                                                    <h6 className="  font-weight-bold text-info ms-2 m-b-5 m-t-10">
                                                        {comment.CommentText}
                                                    </h6> */}
                                                </div>
                                            </div>
                                        );
                                    })}
                                {!comments && (
                                    <div>
                                        <label className="ms text-white">
                                            No comments yet for this teacher
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentsComponent;
