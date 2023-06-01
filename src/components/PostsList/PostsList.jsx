import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsClice";
import PostCard from "../PostCard/PostCard";
import { getPosts } from "../../features/posts/postsActions";
import "./PostsList.css";

import PaginationBar from "../Pagination/PaginationBar";
const PostsList = () => {
  const { posts } = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="posts-list">
        {posts.map((item) => (
          <PostCard key={item.id} card={item} />
        ))}
      </div>
      <PaginationBar />
    </div>
  );
};

export default PostsList;
