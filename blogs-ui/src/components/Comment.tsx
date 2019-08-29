import React from "react";
import { Comment as UserComment} from "../models";

export const Comment: React.FC<CommentProps> = (props) => {
    return (<>
          <div className="row align-items-center">
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <p className="card-text">{props.userComment.body}</p>
              <p className="justify-content-end text-primary">{props.userComment.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>);
}

export interface CommentProps {
    userComment: UserComment
    
}