import React from "react";
import ToneService from "../service/ToneAnalyzerService";
import MessageView from "./MessageView";
import logo from "../logo.svg";

class Homepage extends React.Component {
  state = {
    documentTones: [],
    text: ""
  };

  onChange = event => {
    const key = event.target.name;
    const val = event.target.value;
    this.setState({
      [key]: val
    });
  };

  onClick = () => {
    console.log(this.state.text);
    ToneService.analyzerPost(this.state.text, this.onSuccess, this.onError);
  };

  onSuccess = response => {
    // let documentTonesResponse = response.document_tones.tones;
    console.log(response.data);

    // this.setState({
    //     documentTones: documentTonesResponse
    // })
    // for(let i = 0; i < documentTones.length; i++){
    //     return documentTones[i].tone_name.toString();
    // }
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
              <MessageView
                onClick={this.onClick}
                text={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
