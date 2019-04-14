import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import ToneAnalyzerService from "../../service/ToneAnalyzerService";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

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

function toneAverage(currentAverage, num2, currentIndex) {
  currentAverage = currentAverage + num2 / currentIndex;
  return currentAverage;
}

class ChatApp extends React.Component {
  constructor() {
    super();
    this.state = {
      angerIndex: 0,
      angerToneScore: 0,
      disgustToneScore: 0,
      disgustIndex: 0,
      fearToneScore: 0,
      fearIndex: 0,
      joyToneScore: 0,
      joyIndex: 0,
      sadnessToneScore: 0,
      sadnessIndex: 0,
      analyzed: [],
      messages: [],
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
      this.setState({ messages });
    });
  }

  onSendMessage = message => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  };

  analyzing = message => {
    ToneAnalyzerService.analyzerPost(
      message,
      this.analyzingSuccess,
      this.analyzingError
    );
  };

  analyzingSuccess = response => {
    let newResponse = [];
    let angerScore = 0;
    let disgustScore = 0;
    let fearScore = 0;
    let joyScore = 0;
    let sadnessScore = 0;

    for (
      let i = 0;
      i < response.data.document_tone.tone_categories[0].tones.length;
      i++
    ) {
      newResponse.push(
        response.data.document_tone.tone_categories[0].tones[i].tone_name
      );
      if (i === 0) {
        angerScore = toneAverage(
          this.state.angerToneScore,
          response.data.document_tone.tone_categories[0].tones[i].score,
          this.state.angerIndex + 1
        );
      } else if (i === 1) {
        disgustScore = toneAverage(
          this.state.disgustToneScore,
          response.data.document_tone.tone_categories[0].tones[i].score,
          this.state.disgustIndex + 1
        );
      } else if (i === 2) {
        fearScore = toneAverage(
          this.state.fearToneScore,
          response.data.document_tone.tone_categories[0].tones[i].score,
          this.state.fearIndex + 1
        );
      } else if (i === 3) {
        joyScore = toneAverage(
          this.state.joyToneScore,
          response.data.document_tone.tone_categories[0].tones[i].score,
          this.state.joyIndex + 1
        );
      } else {
        sadnessScore = toneAverage(
          this.state.sadnessToneScore,
          response.data.document_tone.tone_categories[0].tones[i].score,
          this.state.sadnessIndex + 1
        );
      }
    }
    this.setState({
      documentTone: newResponse.toString(" "),
      angerIndex: this.state.angerIndex + 1,
      disgustIndex: this.state.disgustIndex + 1,
      fearIndex: this.state.fearIndex + 1,
      joyIndex: this.state.joyIndex + 1,
      sadnessIndex: this.state.sadnessIndex + 1,
      angerToneScore: angerScore,
      disgustToneScore: disgustScore,
      fearToneScore: fearScore,
      joyToneScore: joyScore,
      sadnessToneScore: sadnessScore
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
                    currentMember={this.state.member}
                  />
                )}
                <Input
                  onSendMessage={this.onSendMessage}
                  analyzing={this.analyzing}
                />
                {this.state.documentTone}
                <ColumnChart
                  data={[
                    ["Anger", this.state.angerToneScore],
                    ["Disgust", this.state.disgustToneScore],
                    ["Fear", this.state.fearToneScore],
                    ["Joy", this.state.joyToneScore],
                    ["Sadness", this.state.sadnessToneScore]
                  ]}
                  colors={["#0F2924"]}
                  // style={{backgroundColor: "#FFF"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;
