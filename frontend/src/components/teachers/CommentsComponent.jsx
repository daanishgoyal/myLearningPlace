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
                                                className="font-weight-bold"
                                                key={index}
                                            >
                                                {/* <div class="col-sm-3 col-lg-2 hidden-xs"> */}
                                                {/* <img
                                                        class="img-responsive"
                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        alt=""
                                                    /> */}
                                                {/* </div> */}
                                                <h4 className="  font-weight-bold text-primary ">
                                                    {comment.CommentBy + " :"}
                                                </h4>
                                                <div className=" comment  col-lg-4 ">
                                                    <textarea
                                                        id="message"
                                                        rows="1"
                                                        cols="15"
                                                        // style="background-color:#99FFFF;"
                                                        placeholder={
                                                            comment.CommentText
                                                        }
                                                        required=""
                                                    ></textarea>
                                                </div>

                                                {/* <div className=" font-weight-bold text-info ms-2">
                                                    {comment.CommentText}
                                                </div> */}
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
