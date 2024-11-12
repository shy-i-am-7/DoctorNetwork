import React, { Component } from "react";
import DoctorCard from "../components/PreviousDoc/DoctorCard";
import DoctorDataService from "../services/doctor.service";
import "./PreviousDoc.css";

export default class PreviousDoc extends Component {
  constructor(props) {
    super(props);
    this.retrieveDoctors = this.retrieveDoctors.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    this.closeAnswer = this.closeAnswer.bind(this);

    this.state = {
      doctors: [],
      activeAnswers: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.retrieveDoctors();
  }

  retrieveDoctors() {
    DoctorDataService.getAllDoctors()
      .then((response) => {
        this.setState({
          doctors: response,
          loading: false,
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  }

  setActiveQuestion(doctorIndex, questionIndex) {
    this.setState((prevState) => ({
      activeAnswers: {
        ...prevState.activeAnswers,
        [doctorIndex]: questionIndex,
      },
    }));
  }

  closeAnswer(doctorIndex) {
    this.setState((prevState) => ({
      activeAnswers: {
        ...prevState.activeAnswers,
        [doctorIndex]: null,
      },
    }));
  }

  render() {
    const { doctors, activeAnswers, loading } = this.state;

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    return (
      <div className="container">
        <div className="prev_doc_container">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div className="doctor-answer-container" key={index}>
                <div className="doctor-card-wrapper">
                  <DoctorCard
                    doctor={doctor}
                    onQuestionSelect={(questionIndex) =>
                      this.setActiveQuestion(index, questionIndex)
                    }
                  />
                </div>
                <div className="answer-wrapper">
                  {activeAnswers[index] !== undefined &&
                    activeAnswers[index] !== null && (
                      <div className="answer">
                        <button
                          className="close-button"
                          onClick={() => this.closeAnswer(index)}
                        >
                          ×
                        </button>
                        <h4>
                          <strong>{doctor.questions[activeAnswers[index]]}</strong>
                        </h4>
                        <p>
                          {doctor.answers[activeAnswers[index]]
                            .split("//n")
                            .map((line, i) => (
                              <span key={i}>
                                {line}
                                <br />
                              </span>
                            ))}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ))
          ) : (
            <div></div>
            // <div>No doctors found</div>
          )}
        </div>
      </div>
    );
  }
}
