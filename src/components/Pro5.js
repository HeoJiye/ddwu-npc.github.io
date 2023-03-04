import React from "react";
import styled from "styled-components";
import land from "./img/5th/land.PNG"
import bread from "./img/5th/bread.PNG"
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
const Pro5 = () => {
  return (
    <div>
      <NumText>| 5기</NumText>
      <GridContainer>
      <DetailDiv>
        <ImageDiv src={land} style={{marginTop:'28px'}}/>
        <GameDetail><TitleDiv>알섬에서</TitleDiv>
          <TextDiv>새로운 작품 구상을 위해 알섬마을로 이사를 가게 된 은주.
마을 사람들과 친해지기 위해 잔치에 참석한 날 밤, 살인사건이 일어난다.<br/>
은주는 간밤의 일을 기억하지 못해 살인사건의 유력 용의자가 되는데…
과연 은주는 누명을 벗고 살인범을 찾을 수 있을까?
</TextDiv>
        </GameDetail>
      </DetailDiv>
      <DetailDiv>
        <ImageDiv src={bread} />
        <GameDetail><TitleDiv>야옹이 빵굽기</TitleDiv>
          <TextDiv>"나 빵집 알바생 야옹이! 고등어 한 마리 사서 먹기도 빠듯하다... 내가 정직원이 될 수 있게 도와줘!!"
야옹이 빵굽기는 정직원이 되기 위해 열심히 빵을 만드는 야옹이의 여정을 그린 게임입니다.
야옹이가 정직원이 될 수 있도록 도와주세요!
</TextDiv>
</GameDetail>
      </DetailDiv>
      </GridContainer>
    </div>
  );
};

export default Pro5;