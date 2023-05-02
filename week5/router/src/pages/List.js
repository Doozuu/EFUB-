import { useNavigate } from "react-router-dom";

import isLogin from "../components/Login";

const List = () => {
  // 로그인 했을 경우에만 접근 가능한 페이지
  isLogin();
  const posts = [
    {
      id: 1,
      title: "1번 포스트",
    },
    {
      id: 2,
      title: "2번 포스트",
    },
    {
      id: 3,
      title: "3번 포스트",
    },
  ];

  const style = {
    border: "1px solid gray",
    height: "50px",
    width: "100px",
    marginBottom: "10px",
  };

  const navigate = useNavigate();

  const handleClickPost = (id) => {
    console.log(id);
    navigate(`${id}`);
  };

  return (
    <div>
      <h1>List page</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={style}
          onClick={() => handleClickPost(post.id)}
        >
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default List;
