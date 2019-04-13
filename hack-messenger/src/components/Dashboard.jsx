import React from "react";
import { Component, VerticalBarSeries, MarkSeries } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";

class Dashboard extends Component {
  state = {
    Openness: ""
  };
  componentDidMount() {
    console.log("welcome to the dashboard");
  }
  data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
  ];

  render() {
    return (
      //   <React.Fragment>
      //     <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" />
      //     <div>Welcome to the Dashboard!</div>
      //   </React.Fragment>

      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-middle">
          Welcome to the dashboard!
          <div className="w3-display-left">
            Big 5 Personalities
            <ul>
              <div
                className="card"
                style={{ background: "black", color: "white" }}
              >
                <li>Openness</li>
                <div style={{ paddingLeft: "20px" }}>Adventurousness</div>
                <div style={{ paddingLeft: "20px" }}>Artistic interests</div>
                <div style={{ paddingLeft: "20px" }}>Emotionality</div>
                <div style={{ paddingLeft: "20px" }}>Imagination</div>
                <div style={{ paddingLeft: "20px" }}>Intellect</div>
                <div style={{ paddingLeft: "20px" }}>Authority-challenging</div>
              </div>
              <li>Conscientiousness</li>
              <li>Extraversion</li>
              <li>Agreeablness</li>
              <li>Neuroticism</li>
            </ul>
            <div>
              <XYPlot width={300} height={300} style={{ paddingTop: "400px" }}>
                <HorizontalGridLines />
                <LineSeries
                  data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
                />
                <XAxis />
                <YAxis />
              </XYPlot>
              {/* <div>
                <XYPlot height={200} width={200}>
                  <VerticalBarSeries data={this.data} />
                </XYPlot>
                <XYPlot height={200} width={200}>
                  <LineSeries data={this.data} />
                </XYPlot>
                <XYPlot height={200} width={200}>
                  <MarkSeries data={this.data} />
                </XYPlot>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
