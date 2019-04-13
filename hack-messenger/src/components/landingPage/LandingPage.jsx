import React from "react";

class LandingPage extends React.Component {
    login = () => {
        this.props.history.push("/messenger");
    }

  render() {
    return (
        <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
          <div className="w3-display-middle">
            <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
            <hr
              className="w3-border-grey"
              style={{ margin: "auto", width: "40%" }}
            />
            <p className="w3-large w3-center">Log In</p>
            <div className="formDisplay">
              <div className="form-group">
                <label className="col-md-9 offset-1">Email:</label>
                <input
                  className="col-md-9 offset-1 form-control"
                  placeholder="johndoe@yahoo.com"
                />
              </div>
              <div className="form-group">
                <label className="col-md-9 offset-1">Password:</label>
                <input
                  type="password"
                  className="col-md-9 offset-1 form-control"
                />
              </div>
              <button
                className="btn btn-outline-info col-md-9 offset-1"
                onClick={this.login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default LandingPage;
