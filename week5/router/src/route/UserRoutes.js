import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<h1>로그인 페이지</h1>}></Route>
      <Route path="/signup" element={<h1>회원가입 페이지</h1>}></Route>
      <Route path="/posts" element={<h1>내가 쓴 글 페이지</h1>}></Route>
      <Route path="/bookmark" element={<h1>저장한 북마크 페이지</h1>}></Route>
      <Route path="/setting" element={<h1>설정 페이지</h1>}></Route>
      <Route path="/info" element={<h1>회원 정보 페이지</h1>}></Route>
    </Routes>
  );
};

export default UserRoutes;
