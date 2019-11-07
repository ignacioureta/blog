import React from "react";
import styled from "styled-components";
import Post from "./components/Post";

const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: rgb(11, 11, 11);
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  font-family: "Roboto";
  align-items: center;
`;

const Header = styled.div`
  height: 200px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(11, 11, 11);
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled.span`
  font-size: 72px;
  font-weight: 600;
`;

const Body = styled.div`
  max-width: 800px;
  width: 80%;
  margin-top: 230px;
`;

const Footer = styled.div`
  margin-top: 50px;
`;

const App: React.FC = () => {
  return (
    <Page>
      <Header>
        <Title>Blog</Title>
      </Header>
      <Body>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Body>
      <Footer />
    </Page>
  );
};

export default App;
