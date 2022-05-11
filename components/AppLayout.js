import Proptypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href={"/"}>
          <a>홈페이지</a>
        </Link>
        <Link href={"/notice"}>
          <a>공지사항</a>
        </Link>
        <Link href={"/reservation"}>
          <a>예약 페이지</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default AppLayout;
