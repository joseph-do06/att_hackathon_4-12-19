import React from "react";
import ToneService from "../service/ToneAnalyzerService";
import MessageView from "./MessageView";
// import ToneFunction from "./toneFunction";

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
    console.log(response.data.document_tone.tone_categories);

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
        <MessageView
          onClick={this.onClick}
          text={this.state.text}
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default Homepage;
