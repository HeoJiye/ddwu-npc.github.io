import React from "react";
import styled from "styled-components";
import color from "./img/4th/colorme.JPG";
import whisky from "./img/4th/whisky.PNG";
import {Routes, Route, Link} from 'react-router-dom'
const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
`;
const TextDiv = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  text-align:left;
`;

const TitleDiv = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  text-align:left;
  font-weight: 600;
  margin-bottom:3px;
`;
const ScrollDiv = styled.div`
  margin-top: 160px;
  margin-left: 35px;
  overflow: scroll;

  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;


const DetailDiv = styled.div`
  @media (min-width: 390px) and (max-width: 749px)
  {
    width: 324px;
    margin:auto;
  }
`;

const ImageDiv = styled.img`
@media (min-width: 390px) and (max-width: 749px)
{
  background-size: cover;
  width: 324px;
  height: 204px;
  border-radius: 10px 10px 0px 0px;
  margin-top: 100px;
  margin-left: auto;
}
@media (min-width: 750px) {
  background-size: cover;
  width: 324px;
  height: 204px;
  border-radius: 10px 10px 0px 0px;
  margin-top: 28px;
  
 }

`;
const GameDetail = styled.div`
  display: inline-block;
  width: 288px;
  background: #F6F6F6;
  border-radius: 0px 0px 10px 10px;
  margin: auto;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 20px;
  padding-left: 17px;
`;

const DetailText = styled.div`
  position: absolute;
  height: 20px;
  left: 47px;
  margin-top: 10%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
`;

const NumText = styled.div`
  font-family: "Noto Sans";
  font-size: 16px;
  line-height: 100%;
  font-weight: 600;
  text-align: left;
  margin-left: 30px;
  margin-top:72px;

`
const GridContainer = styled.div`
@media (min-width: 750px)
{
  display: grid;
  grid-template-columns: 340px 340px;
  grid-template-rows: 450px;
  place-content: center;
}
@media (min-width: 1200px) 
{
  display: grid;
  grid-template-columns: 340px 340px 340px;
  grid-template-rows: 450px;
  place-content: center;
}
`
const Pro4 = () => {
  return (
    <div>
      <NumText>| 4기</NumText>
      <GridContainer>
      <DetailDiv>
        <ImageDiv src={whisky} style={{marginTop:'28px'}}/>
        <GameDetail><TitleDiv>위스키</TitleDiv>
          <TextDiv>최고 보안 등급의 교도소, 형사인 주인공은 그 안에 잠입해 연쇄살인사건의 진범을 알아내려 한다.
용의자는 네 명. 같은 재소자로 위장한 후 그들의 호감을 사 사건의 진실에 다가가야만 하는데...
매력적인 인물들과 깊은 스토리가 있는 교도소 추리 게임, 향후 스팀 출시 예정!
</TextDiv>
        </GameDetail>
      </DetailDiv>
      <DetailDiv>
        <ImageDiv src={color} />
        <GameDetail><TitleDiv>Color Me!</TitleDiv>
          <TextDiv>어느 날, 무지개 숲 속을 뛰어다니는 꿈을 꾼 주인공!<br/>
달콤했던 꿈과는 달리, 눈을 뜨니 색이 모두 사라진 자신을 발견하게 되는데….
주인공은 무사히 색을 되찾을 수 있을까?
</TextDiv>
</GameDetail>
      </DetailDiv>
      </GridContainer>
    </div>
  );
};

export default Pro4;