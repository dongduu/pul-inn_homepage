import Proptypes from "prop-types";
import Link from "next/link";
import { Menu, Row, Col } from "antd";

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
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.airbnb.co.kr/rooms/52211363?adults=1&s=42&unique_share_id=F7A5497F-8FB2-469B-B5E3-38729118B76B&_branch_match_id=1052844957711407821&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdX3KwpN9TQyy%2FTKTwIAYiyBlhsAAAA%3D&source_impression_id=p3_1652340475_8t%2FwfEaVNoa3GFFj"
            target="_blank"
            rel="noreferrer noopener"
          >
            에어비앤비 링크
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default AppLayout;
