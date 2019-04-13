import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import ToneAnalyzerService from "../../service/ToneAnalyzerService";

function randomName() {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless"
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class ChatApp extends React.Component {
  constructor() {
    super();
    this.state = {
      analyzed: "",
      analyzedCollection: [],
      messages: [],
      sentiments: ["Happy", "Sad"],
      member: {
        username: randomName(),
        color: randomColor()
      }
    };
    this.drone = new window.Scaledrone("eYSzFbz5CWV88jSw", {
      data: this.state.member
    });
    this.drone.on("open", error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages }, () => {
        this.analyzing(data);
      });
    });
  }

  onSendMessage = message => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  };

  analyzing = () => {
    let message = "The first is a straight up horror with some campiness thrown in, in large part just because of the style and skills involved.";
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
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="App">
              <div className="App-header">
                <h1>My Chat App</h1>
                {this.state.messages && (
                  <Messages
                    messages={this.state.messages}
                    sentiments={this.state.sentiments}
                    currentMember={this.state.member}
                  />
                )}
                <Input
                  onSendMessage={this.onSendMessage}
                  analyzing={this.analyzing}
                />
                {this.state.analyzed}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;
