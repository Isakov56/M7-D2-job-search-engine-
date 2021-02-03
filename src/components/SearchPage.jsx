import { InputGroup, FormControl, Button } from "react-bootstrap";
import React, { Component } from "react";
import Jobs from "./Jobs";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "java",
      location: "london",
      jobsFound: [],
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePositionChange(event) {
    this.setState({ position: event.target.value });
  }
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchData();
  }

  async fetchData() {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position}&location=${this.state.location}`
    );
    let data = await response.json();
    console.log("data for search", data);
    this.setState({
      jobsFound: data,
    });
  }

  componentDidMount = async () => {
    this.fetchData();
    console.log(`here we go, `, this.state.jobsFound, this.state.position);
  };
  render() {
    return (
      <div>
        <div>
          <h1>Welcome To Find Your Future Job!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Position</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="JavaScript"
                type="text"
                value={this.state.position}
                onChange={this.handlePositionChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Your Location</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Rome"
                type="text"
                value={this.state.location}
                onChange={this.handleLocationChange}
              />
            </div>
            <div className="form-check"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Jobs jobsFound={this.state.jobsFound} selectedJobHandler={this.props.selectedJob} />
      </div>
    );
  }
}

export default SearchPage;
