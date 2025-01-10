import React, { Component } from "react";
import FormDataService from "../../services/form.service";
import FormResDataService from "../../services/formres.service";
import { useTheme } from "../../ThemeContext"; // Use the custom hook

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);

    this.state = {
      questionPhysicianList: [],
      questionResidentList: [],
      currentQuestion: null,
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  componentDidUpdate(prevProps) {
    const { refreshTrigger, isPhysician } = this.props;

    // Refresh questions when refreshTrigger changes
    if (prevProps.refreshTrigger !== refreshTrigger) {
      this.retrieveQuestions();
    }

    // Clear currentQuestion when isPhysician changes
    if (prevProps.isPhysician !== isPhysician) {
      this.setState({ currentQuestion: null });
    }
  }

  retrieveQuestions() {
    // Fetch physician questions
    FormDataService.getAll()
      .then((response) => {
        const sortedPhysQuestions = response.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        this.setState({ questionPhysicianList: sortedPhysQuestions });
      })
      .catch((e) => console.log(e));

    // Fetch resident questions
    FormResDataService.getAll()
      .then((response) => {
        const sortedResQuestions = response.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        this.setState({ questionResidentList: sortedResQuestions });
      })
      .catch((e) => console.log(e));
  }

  setActiveQuestion(question) {
    this.setState({ currentQuestion: question });
  }

  render() {
    const { questionPhysicianList, questionResidentList, currentQuestion } = this.state;
    const { isPhysician } = this.props;

    const questionsList = isPhysician ? questionPhysicianList : questionResidentList;

    return (
      <div className="questions-and-answers-container">
        <div className="box questions-list" style={{ flex: 1.5 }}>
          <div className="title">Your Submitted Questions</div>
          <div className="content changeable-font" id="questions-content">
            {questionsList.length > 0 ? (
              questionsList.map((question, index) => (
                <div
                  className="item"
                  onClick={() => this.setActiveQuestion(question)}
                  key={question.id}
                  style={{ cursor: "pointer" }}
                >
                  <div className="item-number">{index + 1}</div>
                  <div className="item-text">{question.question}</div>
                </div>
              ))
            ) : (
              <div className="no-questions">No questions available.</div>
            )}
          </div>
        </div>

        <div className="box answers-list" style={{ flex: 3 }}>
          <div className="title">Answers</div>
          <div className="content changeable-font" id="answers-content">
            {currentQuestion ? (
              currentQuestion.answer !== "Answer then Mark as complete" ? (
                <div className="answer">
                  <div className="answer-question">{currentQuestion.question}</div>
                  <div className="answer-text">{currentQuestion.answer}</div>
                </div>
              ) : (
                <div className="no-answer">
                  <div className="answer-question">{currentQuestion.question}</div>
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
    );
  }
}

// Wrap with useTheme hook
export default function QuestionListWrapper(props) {
  const { isPhysician } = useTheme(); // Access isPhysician from ThemeContext
  return <QuestionList {...props} isPhysician={isPhysician} />;
}




