import { Component } from "react";
import React from "react";

class Messages extends Component {
  renderMessage(message, index) {
    const { member, text, tone } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className} key={index}>
        <span
          className="avatar"
          // style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
          <div className="tone">{tone}</div>
        </div>
      </li>
    );
  }

  scrollToBottom = () => {
    this.messages.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <div className="MessageContainer">
          <div className="MessagesList">
            <ul className="Messages-list">
              {messages.map((m, index) => this.renderMessage(m, index))}
              <div
                style={{ float: "left", clear: "both" }}
                ref={el => {
                  this.messages = el;
                }}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
