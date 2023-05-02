const isLogin = () => {
  if (!localStorage.getItem("idx")) {
    alert("접근할 수 없는 페이지입니다.");
    window.location.replace("/user/login"); // 로그인 페이지로 이동
  }
};

export default isLogin;
