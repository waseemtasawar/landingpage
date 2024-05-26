import "../index.css";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <svg
          width="133"
          height="40"
          viewBox="0 0 133 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />{" "}
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="" className="active">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a href="">why US</a>
          </li>
          <li>
            <a href="">Review</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <ul>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
        <button className="btn_register">Register</button>
      </div>
    </nav>
  );
};

export default Navigation;
