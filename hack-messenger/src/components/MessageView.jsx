import React from "react";
// import ToneFunction from "./toneFunction";

const MessageView = props => {
  return (
    <div className="container">
      <div className="form-group">
        <label className="float-left">Message:</label>
        <textarea
          name="text"
          value={props.text}
          className="col-md-12 form-control"
          onChange={props.onChange}
        />
      </div>
      {/* <div>
        <ToneFunction />
      </div> */}
      <button className="btn btn-primary float-right" onClick={props.onClick}>
        Send
      </button>
    </div>
  );
};

export default MessageView;
