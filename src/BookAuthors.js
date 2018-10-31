import React, { Component } from "react";

class BookAuthors extends Component {
  render() {
    let book = this.props.book;
    let author = this.props.author;
    return (
      <div>
        <p> {book.title}; </p>
        <p> {author.first_name + " " + author.last_name} </p>
      </div>
    );
  }
}

export default BookAuthors;
