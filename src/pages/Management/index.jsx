import React from "react";

import styles from "./style.module.scss";

const Member = (props) => {
  return (
    <div>
      <div className={styles.profile}>
        <img src={props.profile}></img>
      </div>

      <div>
        <div className={styles.member_name}>{props.name}</div>
        <div className={styles.member_position}>{props.position}</div>
      </div>
    </div>
  );
};

class Management extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member: [
        {
          name: "김예지",
          position: "동아리장",
          profile: require("./img/김예지.jpg"),
        },
        {
          name: "곽현수",
          position: "부동아리장",
          profile: require("./img/곽현수.jpg"),
        },
        {
          name: "장영선",
          position: "기획팀장",
          profile: require("./img/장영선.jpg"),
        },
        {
          name: "윤수연",
          position: "개발팀장",
          profile: require("./img/윤수연.jpg"),
        },
        {
          name: "권유진",
          position: "디자인팀장",
          profile: require("./img/권유진.jpg"),
        },
        {
          name: "황지민",
          position: "홍보팀장",
          profile: require("./img/황지민.jpg"),
        },
        {
          name: "홍성주",
          position: "DB팀장",
          profile: require("./img/홍성주.jpg"),
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.page}>
        <h2>운영진 명단</h2>
        <div>
          {this.state.member.map((e) => (
            <Member
              name={e.name}
              position={e.position}
              profile={e.profile}
            ></Member>
          ))}
        </div>
      </div>
    );
  }
}

export default Management;
