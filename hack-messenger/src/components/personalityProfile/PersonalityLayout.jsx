import React from "react";

const PersonalityLayout = props => {
  return (
    <React.Fragment>
      {/* <!-- Header --> */}
      <header
        className="pL-container pL-red pL-center"
        style={{ padding: "128px 16px" }}
      >
        <h1 className="pL-margin pL-jumbo">Personality Breakdown</h1>
        <button className="pL-button pL-padding-large btn btn-outline-info pL-large pL-margin-top">
          Get Started
        </button>
      </header>

      {/* <!-- First Grid --> */}
      <div className="pL-row-padding pL-padding-64 pL-container container">
        <div className="pL-content">
          <div className="pL-twothird">
            <h1>Lorem Ipsum</h1>
            <h5 className="pL-padding-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h5>

            <p className="pL-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="pL-third pL-center">
            {/* <i className="fa fa-anchor pL-padding-64 pL-text-red" /> */}
            <img className="fa fa-anchor pL-padding-64 pL-margin-right" src="https://yt3.ggpht.com/a-/AAuE7mCxTXlDn29FoPjqOB0Z1R2wuStUHNgFLUpq4w=s900-mo-c-c0xffffffff-rj-k-no" alt="Sherlocked" />
          </div>
        </div>
      </div>

      {/* <!-- Second Grid --> */}
      <div className="pL-row-padding pL-light-grey pL-padding-64 pL-container container">
        <div className="pL-content">
          <div className="pL-third pL-center">
            {/* <i className="fa fa-coffee pL-padding-64 pL-text-red pL-margin-right" /> */}
            <img className="fa fa-coffee pL-padding-64 pL-margin-right" src="https://sherlockholmestv.files.wordpress.com/2016/03/freeman_john_watson_303.jpg" alt="Watson" />
          </div>

          <div className="pL-twothird">
            <h1>Lorem Ipsum</h1>
            <h5 className="pL-padding-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h5>

            <p className="pL-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="pL-container pL-black pL-center pL-opacity pL-padding-64">
        <h1 className="pL-margin pL-xlarge">Quote of the day: <span style={{color: "#B48B4D"}}>You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.</span></h1>
      </div>
    </React.Fragment>
  );
};

export default PersonalityLayout;
