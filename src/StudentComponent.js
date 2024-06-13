import React from "react";

class StudentComponent extends React.Component {
  componentDidMount() {
    // componentDidMount is called after the component is rendered for the first time.
    console.warn("StudentComponent - componentDidMount");
  }

  componentDidUpdate() {
    // componentDidUpdate is called after the component's updates are flushed to the DOM.
    console.warn("StudentComponent - componentDidUpdate");
  }

  componentWillUnmount() {
    // componentWillUnmount is called when the component is about to be removed from the DOM.
    console.warn("StudentComponent - componentWillUnmount");
  }

  render() {
    // render method is called whenever the component is re-rendered.
    return (
      <div>
        <h1>StudentComponent</h1>
      </div>
    );
  }
}

export default StudentComponent;
