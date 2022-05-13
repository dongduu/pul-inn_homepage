import Proptypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Menu, Row, Col } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <HeaderBox>
        <Logo>Pul,inn</Logo>
        <NavBox>
          <Link href={"/"}>
            <a>홈페이지</a>
          </Link>
          <Link href={"/notice"}>
            <a>공지사항</a>
          </Link>
          <Link href={"/reservation"}>
            <a>예약 페이지</a>
          </Link>
        </NavBox>
      </HeaderBox>
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
      <Footer>
        <p>사업자등록번호: 201-33-92341 </p>
        <p>TEL: 1322-6745</p>
        <p>2022 Pul,inn Homepage</p>
      </Footer>
    </div>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px black solid;
  position: relative;
`;

const Logo = styled.h1`
  display: inline-block;
  font-size: 68px;
  margin: 70px 200px 20px 40px;
`;

const NavBox = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 100px;
  font-size: 25px;
  color: gray;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px black solid;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-top: 50px;
`;

AppLayout.propTypes = {
  children: Proptypes.node.isRequired,
};

export default AppLayout;
