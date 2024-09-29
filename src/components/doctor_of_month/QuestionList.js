import React, { Component } from "react";
import FormDataService from "../../services/form.service";

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);

    this.state = {
      questionList: [], // Store all questions
      currentQuestion: null, // Active question to display the answer for
    };
  }

  componentDidMount() {
    this.retrieveQuestions(); // Fetch the questions once the component is mounted
  }

  // Retrieve questions from Firebase and sort by ID
  retrieveQuestions() {
    FormDataService.getAll()
      .then(response => {
        // Sort the questions by their numeric ID
        const sortedQuestions = response.sort((a, b) => {
          return parseInt(a.id) - parseInt(b.id); // Ensure comparison is numeric
        });

        // Set sorted questions to state
        this.setState({
          questionList: sortedQuestions
        });

        console.log(sortedQuestions); // Log the sorted questions
      })
      .catch(e => {
        console.log(e); // Log any errors
      });
  }

  // Set a question as the active one to display its answer
  setActiveQuestion(question) { // Removed 'index' as it's not needed
    this.setState({
      currentQuestion: question,
    });
  }

  // Function to replace //n with line breaks
  formatAnswer(answer) {
    return answer.split("//n").map((text, index) => (
      <span key={index}>
        {text}
        <br />
      </span>
    ));
  }

  render() {
    const { questionList, currentQuestion } = this.state; // Removed 'currentIndex'

    return (
      <div className="questions-and-answers-container">
        <div className="box questions-list" style={{ flex: 1.5 }}>
          <div className="title">Your Submitted Questions</div>
          <div className="content changeable-font" id="questions-content">
            {/* Loop through the sorted questionList and display the questions */}
            {questionList.map((question, index) => (
              <div
                className="item"
                onClick={() => this.setActiveQuestion(question)} // No need for 'index'
                key={question.id}  // Use the question ID as the key
                style={{ cursor: "pointer" }}
              >
                <div className="item-number">{index + 1}</div> {/* Display the index */}
                <div className="item-text">{question.question}</div> {/* Display the question */}
              </div>
            ))}
          </div>
        </div>

        {/* Display the answer to the currently selected question */}
        <div className="box answers-list" style={{ flex: 3 }}>
          <div className="title">Answers</div>
          <div className="content changeable-font" id="answers-content">
            {currentQuestion ? (
              currentQuestion.answer !== "Answer then Mark as complete" ? (
                <div className="answer">
                  <div className="answer-question">{currentQuestion.question}</div>
                  <div className="answer-text">
                    {this.formatAnswer(currentQuestion.answer)}
                  </div>
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
