import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHome } from "../modules/posts";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

function PostContainer({ postId }) {
  // history 대신 component 에서 navigate 를 정의
  const navigate = useNavigate();

  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  }; // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    // 페이지에서 벗어날 때마다 Post 를 비워줌
    // return () => {
    //   dispatch(clearPost());
    // };
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이고 데이터 없을때만
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      {/* goToHome 에 navigate 를 파라미터로 보내서 history 대신 사용 */}
      <button onClick={() => dispatch(goToHome(navigate))}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
