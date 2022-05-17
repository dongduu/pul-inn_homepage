import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import mainImag from "../images/main.jpg";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppLayout>
        <MainImg src={mainImag} alt="main" />
      </AppLayout>
    </>
  );
};

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Home;
