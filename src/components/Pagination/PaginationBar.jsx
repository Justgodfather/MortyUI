import { Pagination, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, setPage } from "../../features/posts/postsClice";
import { getPosts } from "../../features/posts/postsActions";

const PaginationBar = () => {
  const { totalPages, page } = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <div style={{ margin: "1% 38%" }}>
      <Stack spacing={2}>
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default PaginationBar;
