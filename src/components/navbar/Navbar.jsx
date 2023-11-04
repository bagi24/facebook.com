import "./navbar.scss";
import {
  HomeOutlined,
  DarkModeOutlined,
  EmailOutlined,
  PersonOutlined,
  SearchOutlined,
  GridViewOutlined,
  NotificationsOutlined,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Facebook</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>Bagrat Injgia</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
