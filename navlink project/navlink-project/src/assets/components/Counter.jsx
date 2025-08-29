import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="container w-50 text-center py-5 border d-flex flex-column align-items-center justify-content-center">
          <h1 className="bg-info py-2 px-5">{name}</h1>
          <div className="text-center mt-5 d-flex gap-5 align-items-center">
            <button
              className="btn btn-danger fw-bold"
              onClick={() => {
                this.setState({ count: this.state.count - 1 });
              }}
            >
              -
            </button>
            <h3>{this.state.count}</h3>
            <button
              className="btn btn-success fw-bold"
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
