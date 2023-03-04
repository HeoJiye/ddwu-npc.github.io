import React from "react";

import "../styles/Schedule.css";

const Detail = (props) => {
  return (
    <>
      <div className="detail">
        <div className="box">
          <div className="detail_name">{props.name}</div>
          <div className="detail_period">{props.period}</div>
        </div>
      </div>
      <Next is_last={props.is_last}></Next>
    </>
  );
};

const Next = (props) => {
  return (
    <div>
      {props.is_last === false ? (
        <div className="circle">
          <div className="triangle" />
        </div>
      ) : null}
    </div>
  );
};

const Qualifiacation = (props) => {
  return (
    <div className="team">
      <div className="teamname">{props.teamname}</div>
      <div className="teaminfo">{props.text}</div>
    </div>
  );
};

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: [
        { name: "모집기간", period: "5/7 ~ 5/14", is_last: false },
        { name: "1차 합격 발표", period: "5/14", is_last: false },
        { name: "면접기간", period: "5/7 ~ 5/14", is_last: false },
        { name: "최종 합격자 발표", period: "5/14", is_last: true },
      ],
      teaminfo: [
        {
          teamname: "기획팀",
          text: "텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리텍스트 들어갈 자리",
        },
        {
          teamname: "디자인팀",
          text: "텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리텍스트 들어갈 자리",
        },
        {
          teamname: "개발팀",
          text: "텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리텍스트 들어갈 자리 텍스트 들어갈 자리 텍스트 들어갈 자리",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div id="schedule">
          <h2>모집일정</h2>
          <div className="details">
            {this.state.detail.map((e) => (
              <Detail
                name={e.name}
                period={e.period}
                is_last={e.is_last}
              ></Detail>
            ))}
          </div>
        </div>
        <hr />
        <div id="qualifiacation">
          <h2>지원 자격</h2>
          <div className="teamlist">
            {this.state.teaminfo.map((e) => (
              <Qualifiacation
                teamname={e.teamname}
                text={e.text}
              ></Qualifiacation>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
