import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import mainImag from "../images/main.jpg";

const Home = () => {
  return (
    <>
      <AppLayout>홈</AppLayout>
      <MainImg src={mainImag} alt="main" />
    </>
  );
};

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Home;
