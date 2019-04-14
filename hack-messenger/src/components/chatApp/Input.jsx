import { Component } from "react";
import React from "react";
import PersonalityInsightsService from "../../service/PersonalityInsightsService";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: props.username
    };
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
    // this.props.analyzing(this.state.text);
    let messageData = {
      username: this.state.username,
      message: this.state.text
    };
    PersonalityInsightsService.sendMessageToDB(
      messageData,
      this.successfulSend,
      this.soSad
    );
  }
  successfulSend = () => {
    console.log("Yippee-ki-yay");
  };

  soSad = () => {
    console.log("ohhh, so sad");
  };
  render() {
    return (
      <React.Fragment>
        <div className="chat-input">
          <form onSubmit={e => this.onSubmit(e)} className="chat-form">
            <input
              onChange={e => this.onChange(e)}
              className="col-md-8 offset-2 form-control"
              value={this.state.text}
              type="text"
              placeholder="Enter your message"
              autoFocus={true}
            />
            <button className="chat-btn btn btn-outline-info col-md-8">
              Send
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={this.props.ternaryPage}
            >
              Who am I?
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Input;
