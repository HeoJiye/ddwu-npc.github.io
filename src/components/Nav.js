import React from "react";

import "../styles/Nav.css";

const Link = (props) => {
  return (
    <a onClick={props.onClick}>
      <span>{props.move}</span>
    </a>
  );
};
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  navOnOff = () => {
    const side_nav = document.querySelector(".side_nav");
    side_nav.style.display =
      side_nav.style.display === "flex" ? "none" : "flex";
  };
  changePage = (page) => {
    console.log(page);
    this.navOnOff();
    this.props.changePage(page);
  };

  render() {
    return (
      <div className="nav">
        <div className="top_nav">
          <Link
            onClick={() => {
              this.changePage("Home");
            }}
            move="홈"
          />
          <Link
            onClick={() => {
              this.changePage("Project");
            }}
            move="프로젝트"
          />
          <Link
            onClick={() => {
              this.changePage("Schedule");
            }}
            move="모집 일정 및 지원 자격"
          />
          <Link
            onClick={() => {
              this.changePage("Management");
            }}
            move="운영진 명단"
          />
          <Link
            onClick={() => {
              this.changePage("QnA");
            }}
            move="Q&A"
          />
        </div>
        <iconify-icon
          class="menu_icon"
          icon="mi:menu"
          onClick={this.navOnOff}
        />
        <div className="side_nav">
          <div className="cancel" onClick={this.navOnOff}>
            <iconify-icon class="cancel_icon" icon="ph:x-bold" />
          </div>
          <Link
            onClick={() => {
              this.changePage("Home");
            }}
            move="홈"
          />
          <Link
            onClick={() => {
              this.changePage("Project");
            }}
            move="프로젝트"
          />
          <Link
            onClick={() => {
              this.changePage("Schedule");
            }}
            move="모집 일정 및 지원 자격"
          />
          <Link
            onClick={() => {
              this.changePage("Management");
            }}
            move="운영진 명단"
          />
          <Link
            onClick={() => {
              this.changePage("QnA");
            }}
            move="Q&A"
          />
        </div>
      </div>
    );
  }
}

export default Nav;
