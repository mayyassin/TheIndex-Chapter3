import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {}
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.unselectAuthor = this.unselectAuthor.bind(this);
  }
  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }
  unselectAuthor(author) {
    this.setState({ currentAuthor: {} });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
