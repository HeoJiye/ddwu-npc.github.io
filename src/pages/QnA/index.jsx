import React from "react";
import styled from "styled-components";
import qIcon from "./img/qIcon.png";

const TextDiv = styled.div`
  position: absolute;
  left: 11.5%;

  top: 90px;
  white-space: nowrap;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
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
  margin-right: 10px;

  font-family: Noto Sans;
  font-size: 15px;
  font-weight: 600;
`;

const DetailDiv = styled.div`
  @media (min-width: 390px) //and (max-width: 749px) {
    width: 100%;
    margin: auto;
  }
`;

const ImageDiv = styled.img`
  background-size: cover;
  width: 324px;
  height: 192px;

  margin-top: 100px;
  margin-left: 35px;
`;

const GameTitle = styled.div`
  position: absolute;
  left: 47px;
  margin-top: 2%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #000000;
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

const Hr = styled.hr`
  border: solid 1px #e8e8e8;
  margin-top: 195px;
  width: 79%;
  margin-left: auto;
  margin-right: auto;
`;
const QText = styled.div`
  color: #4c88ff;
  font-size: 16px;
  font-weight: 600;
  width: 75.1%;
  text-align: left;
  display: inline-block;
  margin-left: 12px;
`;
const QImg = styled.img`
  background-size: cover;
  display: inline-block;
  float: left;

  margin-left: 12.5%;
`;
const QDetail = styled.div`
  margin-top: 50px;
  width: 80%;
  text-align: left;
`;
const ADetail = styled.div`
  display: inline-block;
  background: #f3f3f3;
  border-radius: 10px;
  text-align: center;
  margin-top: 20.5px;
  padding: 20px 25px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  line-hight: 19.07px;
  width: 65%;
`;
const Project = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <TextDiv>Q&A</TextDiv>
      <Hr />
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} style={{ marginTop: "28px" }}></QImg>
          <QText style={{ marginTop: "28px" }}>중앙동아리인가요?</QText>
        </QDetail>
        <ADetail>네. 중앙동아리입니다.</ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>학기 중 활동은 몇 번 있나요?</QText>
        </QDetail>
        <ADetail>
          부서별 /프로젝트별 진행 현황에 따라 달라져 구체적으로 답변 드리기
          어렵습니다. 시험 2주 전에는 동아리 활동은 잠깐 멈춥니다.
        </ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>
            컴과도 아니고 프로그래밍도 못하는데 개발팀 지원 가능할까요? &
            개발팀에 경우 어느 정도의 실력이 요구되나요?
          </QText>
        </QDetail>
        <ADetail>
          변수와 함수같은 프로그래밍 기초 지식을 어느 정도 알고 계신다면 지원이
          가능하십니다.
        </ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>디자인팀은 캐릭터 / 배경 / 그래픽 상관 없이 뽑으시나요?</QText>
        </QDetail>
        <ADetail>디자인팀은 상관없이 뽑습니다.</ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>디자인팀의 경우 어느 정도의 실력이 요구되나요?</QText>
        </QDetail>
        <ADetail>
          기본적인 그림 툴을 다룰 수 있다면 누구나 지원 가능합니다.
        </ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>포지션 복수 지원 가능한가요?</QText>
        </QDetail>
        <ADetail>가능합니다.</ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>학번 상관 없나요?</QText>
        </QDetail>
        <ADetail>학번은 상관 없습니다.</ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>휴학생도 지원 가능한가요?</QText>
        </QDetail>
        <ADetail>네. 가능합니다.</ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>활동기간은 어떻게 되나요?</QText>
        </QDetail>
        <ADetail>
          NPC활동 상 최소 활동기간이 1년입니다. 학년과 상관없이 1년 이상 활동할
          수 있다면 지원 가능합니다.
        </ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>컴퓨터학과 1학년인데 지원 가능한가요?</QText>
        </QDetail>
        <ADetail>
          네. 가능합니다.
          <br />
          개발팀에서 LUA스터디로 시작하면서 프로젝트를 들어가기 때문에
          프로그램의 기초 지식을 알고 계신다면 지원이 가능하십니다. 다만 개발
          특성 상 본인의 노력과 시간을 쏟으셔야하는 점 유념해 주시길 바랍니다.
        </ADetail>
      </DetailDiv>
      <DetailDiv>
        <QDetail>
          <QImg src={qIcon} />
          <QText>몇 명 뽑나요?</QText>
        </QDetail>
        <ADetail>인원은 정해져 있지 않습니다.</ADetail>
      </DetailDiv>
    </div>
  );
};

export default Project;
