import Proptypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href={"/"}>
            <a>홈페이지</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="notice">
          <Link href={"/notice"}>
            <a>공지사항</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="reservation">
          <Link href={"/reservation"}>
            <a>예약 페이지</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default AppLayout;
