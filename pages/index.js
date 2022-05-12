import AppLayout from "../components/AppLayout";
import styled from "styled-components";
// import mainImag from "../images/main.jpg";

const Home = () => {
  return (
    <>
      <AppLayout>홈</AppLayout>
      <MainImg
        src="https://a0.muscache.com/im/pictures/482dbad8-eb5f-4dc3-b4e1-b9cbb78a09ae.jpg?im_w=1200"
        alt="main"
      />
    </>
  );
};

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Home;
