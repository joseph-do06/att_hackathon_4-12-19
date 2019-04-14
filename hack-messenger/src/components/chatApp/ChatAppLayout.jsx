import React from "react";

const ChatAppLayout = props => {
  return (
    <React.Fragment>
      <div className="bgimgChat cal-display-container cal-text-white">
        <div className="cal-display-middle cal-jumbo">
          {props.chatApp}
        </div>
        <div className="cal-display-bottomleft cal-container">
          <p className="cal-xlarge">monday - friday 10-23 | saturday 14-02</p>
          <p className="cal-large">42 village St, New York</p>
          <p>
            powered by{" "}
            <a
              href="https://www.calschools.com/calcss/default.asp"
              target="_blank"
            >
              cal.css
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatAppLayout;
