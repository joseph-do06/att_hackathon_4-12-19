import React from "react";

const ChatAppLayout = props => {
  return (
    <React.Fragment>
      <div className="bgimgChat cal-display-container cal-text-white">
        <div className="cal-display-middle cal-jumbo">
          {props.chatApp}
        </div>
        <div className="cal-display-bottomleft cal-container">
          {props.graph}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatAppLayout;
