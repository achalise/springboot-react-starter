import { User } from "../models";
import React, { useState, useEffect } from "react";
import { Post } from "./Post";

const splitPosts = (posts: any[]) => {
    const few = posts.length > 3 ? posts.slice(0, 3) : posts;
    const rest = posts.length > 3 ? posts.slice(3) : [];
    return [few, rest];
}

export const Posts: React.FC<PostsProps> = props => {
    const [displayedAll, setDisplayedAll] = useState(false)
    let loadMore = props.user.posts.length > 3;
    const [few, rest] = splitPosts(props.user.posts); 
    useEffect(() => {
        setDisplayedAll(false);
    }, [props.user.id]);

  return (
    <div className='mt-5'>
      <h4>Posts from {props.user.name}: </h4>
      {
          few.map(p => (<Post key={p.id} post={p}></Post>))

      }
      {
          displayedAll && rest.map(p => (<Post key={p.id} post={p}></Post>))
      }
      {loadMore  && !displayedAll && <button className="btn btn-primary mt-4" onClick={() => setDisplayedAll(true)}>Load more ...</button>}

    </div>
  );
};

export interface PostsProps {
  user: User;
}
