import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
import BookAuthors from "./BookAuthors";

class AuthorDetail extends Component {
  render() {
    let author = this.props.author;
    let bookAuthors = author.books.map(book => (
      <BookAuthors book={book} key={book.title} author={author} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300"
            src={author.imageUrl}
            className="img-thumbnail"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>this.props.books.title</td>
              <td>{BookAuthors}</td>
              <td>
                <button className="btn" style={{ backgroundColor: "blue" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
