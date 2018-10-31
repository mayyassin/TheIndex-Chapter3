import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AuthorCard from "./AuthorCard";

// Components

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
