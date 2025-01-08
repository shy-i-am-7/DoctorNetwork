import React, { Component } from "react";
import FormDataService from "../../services/form.service";
import "./DoctorDetail.css";

export default class DoctorDetail extends Component {
  constructor(props) {
    super(props);
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
    this.setSelectedQuestion = this.setSelectedQuestion.bind(this);

    this.state = {
      questions: [],
      selectedQuestion: null
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    FormDataService.getAll()
      .then(response => {
        const sortedQuestions = response.sort((a, b) => 
          parseInt(a.id) - parseInt(b.id)
        );
        this.setState({ questions: sortedQuestions });
      })
      .catch(e => {
        console.log(e);
      });
  }

  setSelectedQuestion(question) {
    this.setState({ selectedQuestion: question });
  }

  formatAnswer(answer) {
    return answer.split("//n").map((text, index) => (
      <span key={index}>
        {text}
        <br />
      </span>
    ));
  }

  render() {
    const { doctor, onClose } = this.props;
    const { questions, selectedQuestion } = this.state;

    return (
      <div className="doctor-detail-container">
        {/* Doctor Info Section */}
        <div className="doctor-info-section">
          <button className="close-button" onClick={onClose} title="Click to return to previous page">
            <span>×</span>
            <span className="close-tooltip">Back</span>
          </button>
          
          <div className="info-card">
            <div className="doctor-photo">
              <img src={doctor.photoURL} alt={doctor.name} />
            </div>
            <h2 className="doctor-name">Dr. {doctor.name}</h2>
            
            <div className="doctor-info">
              <p className="doctor-description">{doctor.description}</p>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Specialty:</span> {doctor.specialty}
                </div>
                <div className="info-item">
                  <span className="info-label">Years in Practice:</span> {doctor.graduated}
                </div>
                <div className="info-item">
                  <span className="info-label">Currently working at:</span> {doctor.currentWork}
                </div>
                <div className="info-item">
                  <span className="info-label">Favorite pastime:</span> {doctor.hobby}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Questions and Answers Box */}
        <div className="qa-section">
          <div className="qa-box">
            {/* Questions Column */}
            <div className="questions-column">
              <div className="title">Questions</div>
              <div className="content changeable-font">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    onClick={() => this.setSelectedQuestion(question)}
                    className="item"
                  >
                    <div className="item-number">{index + 1}</div>
                    <div className="item-text">{question.question}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Answers Column */}
            <div className="answers-column">
              <div className="title">Answers</div>
              <div className="content changeable-font">
                {selectedQuestion ? (
                  selectedQuestion.answer !== "Answer then Mark as complete" ? (
                    <div className="answer">
                      <div className="answer-question">{selectedQuestion.question}</div>
                      <div className="answer-text">
                        {this.formatAnswer(selectedQuestion.answer)}
                      </div>
                    </div>
                  ) : (
                    <div className="no-answer">
                      <div className="answer-question">{selectedQuestion.question}</div>
                      <div className="answer-text">This question currently does not have an answer.</div>
                    </div>
                  )
                ) : (
                  <div className="placeholder-text">
                    Click on a question on the left to see the response.<br />
                    Come back later if your question hasn't been answered!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}