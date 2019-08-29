import React, { useState } from "react";
import { Post as UserPost, Comment as UserComment } from "../models";
import userService from "../services/user-service";
import { Comments } from "./Comments";

export const Post: React.FC<PostProps> = props => {
  const [comments, setComments] = useState<UserComment[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [displayComments, setDisplayComments] = useState(false);

  const loadComments = () => {
    !loaded &&
      userService.getComments(props.post.id).then(data => {
        setComments([...data]);
        setLoaded(true);
      });
    setDisplayComments(!displayComments);
  };

  return (
    <>
      <div className="row align-items-center">
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.post.title}</h5>
              <p className="card-text">{props.post.body}</p>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-link" onClick={loadComments}>
          {!displayComments ? `Show comments` : `Hide comments`}
        </button>
      </div>
      {displayComments && loaded && (
        <div>
          <Comments userComments={comments}></Comments>
        </div>
      )}

      {displayComments && !loaded && <div className="">Please wait, loading comments ...</div>}
    </>
  );
};

export interface PostProps {
  post: UserPost;
}
