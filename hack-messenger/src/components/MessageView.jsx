import React from "react";

const MessageView = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label className="float-left">Message:</label>
        <textarea className="col-md-12 form-control" />
      </div>
        <button className="btn btn-primary float-right">Send</button>
    </div>
  );
};

export default MessageView;
