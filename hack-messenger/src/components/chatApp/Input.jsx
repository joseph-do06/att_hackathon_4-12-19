import { Component } from "react";
import React from "react";
import ToneAnalyzerService from "../../service/ToneAnalyzerService"

class Input extends Component {
  state = {
    text: "",
    sentiment: ""
  };
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text)
    this.analyzing(this.state.text.toString());
    // this.setState({ text: "" });
    // this.props.onSendMessage(this.state.text);
    // this.props.analyzing(this.state.text);
  }

  analyzing = message => {
    console.log("analyzing function fired message:", message)
    debugger;
    ToneAnalyzerService.analyzerPost(
      message,
      this.analyzingSuccess,
      this.analyzingError
    );
  };

  analyzingSuccess = response => {
    let newResponse = [];
    for (let i = 0; i < response.data.document_tone.tones.length; i++) {
      newResponse.push(response.data.document_tone.tones[i].tone_name);
    }
    let resultString = newResponse.toString(" ");
    let newResult = [...this.state.analyzedCollection];
    newResult.push(resultString);
    this.setState({
      analyzed: resultString,
      analyzedCollection: newResult
    });
  };

  analyzingError = error => {
    console.log("Analyzing failed", error);
  };

  render() {
    return (
      <React.Fragment>
        <div className="chat-input">
          <form onSubmit={e => this.onSubmit(e)} className="chat-form">
            <input
              onChange={e => this.onChange(e)}
              value={this.state.text}
              type="text"
              placeholder="Enter your message"
              autoFocus={true}
            />
            <button className="chat-btn">Send</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Input;
