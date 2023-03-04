import React from "react";

import "../css/TeamInfo.css";

class TeamInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
      info: [
        {
          name: "기획팀",
          image: "image.png",
          title: "게임의 뼈대, 기반을 담당하는 기획자",
          content:
            "다양한 상상력과 기획들로 스토리를 구성하는 팀입니다. 상황에 맞는 시나리오와 세계관 설정, 게임의 세밀한 부분을 설정합니다.",
        },
        {
          name: "디자인팀",
          image: "image.png",
          title: "캐릭터, 배경 등 게임에 필요한 것을 창조하는 디자이너",
          content:
            "게임에 등장하는 캐릭터, 아이템 원화, 배경, UI 등 게임 리소스를 제작하는 팀입니다.",
        },
        {
          name: "개발팀",
          image: "image.png",
          title: "프로그래밍 언어를 통해 게임을 제작하는 개발자",
          content:
            "프로그래밍을 통해 게임을 개발합니다. 현재 주로 LUA 언어와 UNITY를 사용해 게임을 제작합니다. 4주간 간단한 게임 개발 교육을 받게됩니다.",
        },
      ],
    };
  }

  render() {
    return (
      <div id="Team">
        <h2>NPC 팀 구성</h2>
        <span>
          NPC는 <b>게임 기획팀, 디자인팀, 개발팀</b>의 구성으로 이루어져
          있습니다.
        </span>
        <div className="teamList">
          {this.state.info.map((e, idx) => {
            if (this.state.idx === idx) {
              return <div className="selected">{e.name}</div>;
            }
            return (
              <div
                onClick={() => {
                  this.setState({ ...this.state, idx });
                }}
              >
                {e.name}
              </div>
            );
          })}
        </div>
        <div className="teamInfo">
          <img />
          <h3>{this.state.info[this.state.idx].title}</h3>
          <span>{this.state.info[this.state.idx].content}</span>
          <div className="teamInfo_nav">
            <iconify-icon
              icon="ph:caret-left-bold"
              onClick={() => {
                const idx = this.state.idx > 0 ? this.state.idx - 1 : 0;
                this.setState({ ...this.state, idx });
              }}
            />
            <iconify-icon
              icon="ph:caret-right-bold"
              onClick={() => {
                const idx = this.state.idx < 2 ? this.state.idx + 1 : 2;
                this.setState({ ...this.state, idx });
              }}
            />
          </div>
        </div>
        <div className="teamInfo_all">
          {this.state.info.map((team) => (
            <div className="teamInfo">
              <img />
              <h3>{team.title}</h3>
              <span>{team.content}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeamInfo;
