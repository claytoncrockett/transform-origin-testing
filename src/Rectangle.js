import React from "react";

class Rectangle extends React.Component {
  state = { rotate: false };

  render() {
    let rectangle = "rectangle";
    if (this.state.rotate) rectangle += " rectangle2";
    return (
      <div
        className={rectangle}
        onClick={() => this.setState({ rotate: true })}
      >
        <h1>up</h1>
      </div>
    );
  }
}

export default Rectangle;
