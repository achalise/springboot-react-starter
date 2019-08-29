import React from "react";
import { Comment as UserComment } from "../models";
import { Comment } from "./Comment";

export const Comments: React.FC<CommentsProps> = props => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10">
          {props.userComments.map(comment => (
            <Comment key={comment.id} userComment={comment}></Comment>
          ))}
        </div>
      </div>
    </>
  );
};

export interface CommentsProps {
  userComments: UserComment[];
}
