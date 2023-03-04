import React from "react";
import styled from "styled-components";
import santa from "./img/6th/santa.PNG";
import killing from "./img/6th/killingtag.PNG";
import remember from "./img/6th/remember&recollect.PNG";
import summer from "./img/6th/summer.PNG";
import { Routes, Route, Link } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const TextDiv = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
`;

const TitleDiv = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 3px;
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
  @media (min-width: 390px) and (max-width: 749px) {
    width: 324px;
    margin: auto;
  }
`;

const ImageDiv = styled.img`
  @media (min-width: 390px) and (max-width: 749px) {
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
  background: #f6f6f6;
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
  margin-top: 72px;
`;
const GridContainer = styled.div`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 340px 340px;
    grid-template-rows: 450px;
    place-content: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 340px 340px 340px;
    grid-template-rows: 450px;
    place-content: center;
  }
`;

const Pro6 = () => {
  return (
    <div>
      <NumText>| 6기</NumText>
      <GridContainer>
        <DetailDiv>
          <ImageDiv src={remember} style={{ marginTop: "28px" }} />
          <GameDetail>
            <TitleDiv>Remember & Recollect</TitleDiv>
            <TextDiv>
              어느 날 알 수 없는 꿈 속 세계로 떨어진 아이, 하루. 하늘에 떠 있는
              아름다운 섬이지만 악몽의 존재가 하루의 꿈을 망가뜨리면 현실의
              하루도 위험해진다는 것을 깨닫는다... 과연 하루는 슬리펠프 에딘의
              도움을 받아 무사히 현실 세계로 돌아갈 수 있을까?
            </TextDiv>
          </GameDetail>
        </DetailDiv>
        <DetailDiv>
          <ImageDiv src={killing} />
          <GameDetail>
            <TitleDiv>Killing Tag</TitleDiv>
            <TextDiv>
              ‘50억을 준다면 살인마랑 술래잡기할 수 있어?’ 단순히 재미로
              살인마와 술래잡기를 하게 된 주인공. 처음에는 단순하다 생각했지만,
              시간이 지날수록 공포심은 커져만 가고… 작은 행동 하나하나에도
              살인마는 당신을 찾아낸다. 단서를 찾아 이동하며, 12시가 지나기
              전까지 살인마에게서 벗어나야 한다. ‘일기장’, ‘전화번호’, ‘마이크’…
              수 많은 물건들 중 주인공은 단서를 찾을 수 있을까?
            </TextDiv>
          </GameDetail>
        </DetailDiv>
        <DetailDiv>
          <ImageDiv src={summer} />
          <GameDetail>
            <TitleDiv>여름방학 설화</TitleDiv>
            <TextDiv>
              여름방학을 맞아 할머니 댁에 온 유영은 푸른 나비에 이끌려 수화산
              안으로 들어간다. 수화산을 탈출하기 위해서는 영물들의 이야기를
              듣고, 그들의 은혜를 입어야 하는데, 유영은 무사히 산에서 나올 수
              있을까?
            </TextDiv>
          </GameDetail>
        </DetailDiv>
        <DetailDiv>
          <ImageDiv src={santa} />
          <GameDetail>
            <TitleDiv>산타의 선물 대소동</TitleDiv>
            <TextDiv>
              12월 24일, 크리스마스 이브. 산타는 25일 단 하루를 위해 일했다. 제
              할아버지가 그랬던 것처럼 썰매를 타고 선물을 전달해주는 지겹고
              재미없는 일을 하느라 모든 시간을 썼을 것이다. 크리스마스 당일
              아침, 창고 안에 있었던 그 많던 선물이 전부 몽땅 사라지지만
              았았더라면!
            </TextDiv>
          </GameDetail>
        </DetailDiv>
      </GridContainer>
    </div>
  );
};

export default Pro6;
