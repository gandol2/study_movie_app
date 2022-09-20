import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to={"/"}>홈으로</Link>
        </li>
        <li>
          <Link to={"/top_rated"}>최고평점</Link>
        </li>
        <li>
          <Link to={"/popular"}>인기영화</Link>
        </li>
        <li>
          <Link to={"/now_playing"}>상영중</Link>
        </li>
        <li>
          <Link to={"/upcoming"}>개봉예정</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
