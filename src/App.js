import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer"

import Home from "./components/Main";
import Project from "./components/Project";
import Schedule from "./components/Schedule";
import Management from "./components/Management";
import QnA from "./components/QnA";

import "./styles/Promotion.css";

const pageData = {
  Home: <Home />,
  Project: <Project />,
  Schedule: <Schedule />,
  Management: <Management />,
  QnA: <QnA />,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Home",
    };
  }

  changePage = (page) => {
    this.setState({ page });
  };

  render() {
    const page = pageData[this.state.page];

    return (
      <div id="promotion">
        <Nav changePage={this.changePage}></Nav>
        <div className="content">{page}</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
