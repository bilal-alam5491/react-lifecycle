import React from "react";
import StudentComponent from "./StudentComponent";

class App extends React.Component {
  constructor() {
    super();
    // Constructor is called first.
    console.warn("Constructor is called first.");
    this.state = {
      name: "bilal",
      counter: 0,
      show: true,
    };
  }

  componentDidMount() {
    // componentDidMount is called after the component is rendered for the first time.
    console.warn("ComponentDidMount After Rendering");
  }

  componentDidUpdate() {
    // componentDidUpdate is called after the component's updates are flushed to the DOM.
    console.warn("ComponentDidUpdate ");
  }

  shouldComponentUpdate() {
    // shouldComponentUpdate is called before the component re-renders.
    // It returns true by default, but you can implement custom logic here to optimize rendering.
    console.warn("shouldComponentUpdate", this.state.counter);
    return true;
  }

  render() {
    // render method is called whenever the component is re-rendered.
    console.warn("App-Render is called");
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Update Stating: {this.state.name}</h1>
        <button
          onClick={() => {
            // Updating state and increasing the counter
            this.setState({ name: "alam" });
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Update State
        </button>
        <button
          onClick={() => {
            // Toggling show state to hide/show StudentComponent
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle Student Component
        </button>
        {/* Rendering StudentComponent if show state is true, otherwise, rendering a message */}
        {this.state.show ? <StudentComponent /> : <h1>Component is removed</h1>}
      </div>
    );
  }
}

export default App;
