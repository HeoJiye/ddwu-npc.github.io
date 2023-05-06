import React from "react";

import styles from "./style.module.scss";

const Member = (props) => {
  return (
    <div>
      <img></img>
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
        { name: "김예지", position: "동장" },
        { name: "장영선", position: "기획팀장" },
        { name: "윤수연", position: "개발팀장" },
        { name: "권유진", position: "디자인팀장" },
        { name: "황지민", position: "홍보팀장" },
        { name: "홍성주", position: "DB팀장" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.page}>
        <h2>운영진 명단</h2>
        <div>
          {this.state.member.map((e) => (
            <Member name={e.name} position={e.position}></Member>
          ))}
        </div>
      </div>
    );
  }
}

export default Management;
