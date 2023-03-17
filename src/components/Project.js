import React, { useState } from "react";
import styled from "styled-components";
import Pro4 from "./Pro4";
import Pro5 from "./Pro5";
import Pro6 from "./Pro6";
import ProAll from "./ProAll";
import { Routes, Route, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const TextDiv = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  position: absolute;
  left: 30px;
  top: 90px;
  white-space: nowrap;
`;

const ScrollDiv = styled.div`
  margin-top: 160px;
  overflow: scroll;
  width: 330px;
  margin-left: 20px;
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuDiv = styled.div`
  display: inline-block;
  width: 54px;
  height: 54px;
  background: #f3f3f3;
  border: 2px solid #f3f3f3;
  border-radius: 20px;
  text-align: center;
  line-height: 54px;
  margin-right: 15px;

  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 600;
`;
const MenuLongDiv = styled.div`
  display: inline-block;
  width: 76px;
  height: 54px;
  background: #f3f3f3;
  border: 2px solid #f3f3f3;
  border-radius: 20px;
  text-align: center;
  line-height: 54px;
  margin-right: 15px;

  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 600;
`;

const DetailDiv = styled.div`
  width: 324px;
`;

const Hr = styled.hr`
  @media (min-width: 390px) and (max-width: 749px) {
    border: solid 1px #e8e8e8;
    margin-top: 22px;
  }
  @media (min-width: 750px) {
    border: solid 1px #e8e8e8;
    margin-top: 22px;
    width: 95%;
  }
`;

const Project = () => {
  const [gId, getId] = useState("all");
  // console.log(gId)

  return (
    <div>
      <TextDiv>프로젝트</TextDiv>
      <ScrollDiv>
        <StyledLink to="/">
          <MenuDiv id="all" onClick={() => getId("all")}>
            전체
          </MenuDiv>
        </StyledLink>
        <StyledLink to="/Pro6">
          <MenuDiv id="6th" onClick={() => getId("6th")}>
            6기
          </MenuDiv>
        </StyledLink>
        <StyledLink to="/Pro5">
          <MenuDiv id="5th" onClick={() => getId("5th")}>
            5기
          </MenuDiv>
        </StyledLink>
        <StyledLink to="/Pro4">
          <MenuLongDiv id="4th" onClick={() => getId("4th")}>
            1 ~ 4기
          </MenuLongDiv>
        </StyledLink>
      </ScrollDiv>
      <Hr />
      <Routes>
        <Route path="/" element={<ProAll />} />
        <Route path="/Pro6" element={<Pro6 />} />
        <Route path="/Pro5" element={<Pro5 />} />
        <Route path="/Pro4" element={<Pro4 />} />
      </Routes>
    </div>
  );
};

export default Project;
