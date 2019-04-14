import React from "react";
import PersonalityInsightsService from "../service/PersonalityInsightsService";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);

class Dashboard extends React.Component {
  state = {
    // username: this.props.username,
    username: "ancientstar",

    bigFiveOpenness: "",
    adventurousness: "25",
    artisticInterests: "40",
    emotionality: "15",
    imagination: "55",
    intellect: "75",
    authorityChallenging: "45",

    bigFiveConscientiousness: "",
    achievementStriving: "",
    cautiousness: "",
    dutifulness: "",
    orderliness: "",
    selfDiscipline: "",
    selfEfficacy: "",

    bigFiveExtraversion: "",
    activityLevel: "",
    assertiveness: "",
    cheerfulness: "",
    excitementSeeking: "",
    outgoing: "",
    gregariousness: "",

    bigFiveAgreeablness: "",
    altruism: "",
    cooperation: "",
    modesty: "",
    uncompromising: "",
    sympathy: "",
    trust: "",

    bigFiveNeuroticism: "",
    fiery: "",
    proneToWorry: "",
    melancholy: "",
    immoderation: "",
    selfConsciousness: "",
    susceptibleToStress: ""
  };
  componentDidMount() {
    console.log(this.props.username);
    PersonalityInsightsService.getAllMessages(this.state.username, (response) => {this.retrieved(response)});
  }

  retrieved = (response) => {
    let message = response.data.items;
    let messageArr = [];
    for(let i = 0; i < message.length; i++) {
      messageArr.push(message[i].message)
    }
    let watsonData = messageArr.join(' ');
    PersonalityInsightsService.InsightsPost(watsonData, (response) => {this.watsonSuccess(response)});
  }

  watsonSuccess = (response) => {
    console.log(response);
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{ paddingTop: "100px", paddingLeft: "50px" }}
          className="bgimg w3-display-container w3-animate-opacity w3-text-white"
        >
          <div
            className="w3-jumbo w3-animate-top"
            style={{ paddingLeft: "400px" }}
          >
            Personality Insights
          </div>
          <div class="row">
            <div class="col-sm-4 m-3">
              <div class="card">
                <div class="card-body">
                  <h3 className="card-title text-dark">
                    <strong>Openness</strong>
                  </h3>
                  <p class="card-text">
                    <ColumnChart
                      className=""
                      data={[
                        ["Adventurousness", this.state.adventurousness],
                        ["Artistic Interests", this.state.artisticInterests],
                        ["Emotionality", this.state.emotionality],
                        ["Imagination", this.state.imagination],
                        ["Intellect", this.state.intellect],
                        [
                          "Authority Challenging",
                          this.state.authorityChallenging
                        ]
                      ]}
                      colors={["#416a7a"]}
                    />
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Openness_to_experience"
                    className="btn btn-primary"
                  >
                    Open up and come on inside
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 m-3">
              <div class="card">
                <div class="card-body">
                  <h3 className="card-title text-dark">
                    <strong>Conscientiousness</strong>
                  </h3>
                  <p class="card-text">
                    <ColumnChart
                      className=""
                      data={[
                        [
                          "Achievement Striving",
                          this.state.achievementStriving
                        ],
                        ["Cautiousness", this.state.cautiousness],
                        ["Dutifulness", this.state.dutifulness],
                        ["Orderliness", this.state.orderliness],
                        ["Self Discipline", this.state.selfDiscipline],
                        ["Self Efficacy", this.state.selfEfficacy]
                      ]}
                      colors={["#416a7a"]}
                    />
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Conscientiousness"
                    className="btn btn-primary"
                  >
                    What's on your mind
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 m-3">
              <div class="card">
                <div class="card-body">
                  <h3 className="card-title text-dark">
                    <strong>Extraversion</strong>
                  </h3>
                  <p class="card-text">
                    <ColumnChart
                      className=""
                      data={[
                        ["Activity Level", this.state.activityLevel],
                        ["Assertiveness", this.state.assertiveness],
                        ["Cheerfulness", this.state.cheerfulness],
                        ["ExcitementSeeking", this.state.excitementSeeking],
                        ["Outgoing", this.state.outgoing],
                        ["Gregariousness", this.state.gregariousness]
                      ]}
                      colors={["#416a7a"]}
                    />
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Extraversion_and_introversion"
                    className="btn btn-primary"
                  >
                    Go somewhere, do something
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 m-3">
              <div class="card">
                <div class="card-body">
                  <h3 className="card-title text-dark">
                    <strong>Agreeablness</strong>
                  </h3>
                  <p class="card-text">
                    <ColumnChart
                      className=""
                      data={[
                        ["Altruism", this.state.Altruism],
                        ["Cooperation", this.state.cooperation],
                        ["Modesty", this.state.modesty],
                        ["Uncompromising", this.state.Uncompromising],
                        ["Sympathy", this.state.sympathy],
                        ["Trust", this.state.trust]
                      ]}
                      colors={["#416a7a"]}
                    />
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Agreeableness"
                    className="btn btn-primary"
                  >
                    Astute observation my good man
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4 m-3" style={{ paddingLeft: "400px" }}>
            <div class="card">
              <div class="card-body">
                <h3 className="card-title text-dark">
                  <strong>Neuroticism</strong>
                </h3>
                <p class="card-text">
                  <ColumnChart
                    className=""
                    data={[
                      ["Fiery", this.state.fiery],
                      ["Prone to Worry", this.state.proneToWorry],
                      ["Melancholy", this.state.melancholy],
                      ["Immoderation", this.state.immoderation],
                      ["Self Consciousness", this.state.selfConsciousness],
                      ["Susceptible To Stress", this.state.susceptibleToStress]
                    ]}
                    colors={["#416a7a"]}
                  />
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Neuroticism"
                  className="btn btn-primary"
                >
                  Don't panic
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
