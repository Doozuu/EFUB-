import {
  Route,
  Routes,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/List";
import Detail from "./pages/Detail";

import UserRoutes from "./route/UserRoutes";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const style = {
    width: "50%",
    height: "30px",
    backgroundColor: "yellow",
    display: "flex",
    justifyContent: "space-around",
  };

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location); // location.search 부분이 쿼리스트링 부분

  // 방법 1 ) const queryParams = new URLSearchParams(location.search);
  // 방법 2 ) useSearchParams 이용
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key");
  const id = searchParams.get("id");

  console.log(searchParams);
  console.log(key, id);

  return (
    <div>
      <div style={style}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "gray" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "gray" }
          }
        >
          About
        </NavLink>
        <NavLink
          to="/list"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "gray" }
          }
        >
          List
        </NavLink>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <button onClick={() => navigate(1)}>앞으로가기</button>
        <button onClick={() => navigate("/test?key=value&key2=value2")}>
          쿼리스트링 테스트
        </button>
        <button onClick={() => setSearchParams({ who: "user1", id: 1 })}>
          Query String 바꾸기
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/list"
          element={<PrivateRoute component={<List />} />}
        ></Route>
        {/* <Route path="/list" element={<List />}></Route> */}
        <Route path="/list/:id" element={<Detail />}></Route>
        <Route path="/user/*" element={<UserRoutes />}></Route>
        <Route path="/test" element={<h1>쿼리스트링이 있는 경우</h1>}></Route>
        <Route path="*" element={<h1>404 not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
