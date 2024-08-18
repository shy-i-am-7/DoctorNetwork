import React, { Component } from "react";
import FormDataService from "../../services/form.service";

export default class QuestionList extends Component{
  // const [questions, setQuestions] = useState([]);
  // const [selectedQuestion, setSelectedQuestion] = useState(null);
  // const [answer, setAnswer] = useState('');
  // const [loadingQuestions, setLoadingQuestions] = useState(true);
  // const [loadingAnswer, setLoadingAnswer] = useState(false);

  // useEffect(() => {
  //   // Mock API call to fetch questions
  //   setTimeout(() => {
  //     setQuestions([
  //       { question: 'What is your specialty?' },
  //       { question: 'How many years have you been practicing?' },
  //       { question: 'What inspired you to become a doctor?' }
  //     ]);
  //     setLoadingQuestions(false);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   if (selectedQuestion) {
  //     setLoadingAnswer(true);
  //     // Mock API call to fetch answer
  //     setTimeout(() => {
  //       setAnswer('This is the answer to the selected question.');
  //       setLoadingAnswer(false);
  //     }, 500);
  //   }
  // }, [selectedQuestion]);
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    //this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.getFilteredQuestions = this.getFilteredQuestions.bind(this);

    this.state = {
      questionList: [],
      currentQuestion: null,
      currentIndex: -1,
      filteredQuestionList: []
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    FormDataService.getAll()
      .then(response => {
        this.setState({
          questionList: response
        });
        //this.getFilteredQuestions();
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveQuestions();
    this.setState({
      currentQuestion: null,
      currentIndex: -1
    });
  }

  setActiveQuestion(question, index) {
    this.setState({
      currentQuestion: question,
      currentIndex: index
    });
  }

  getFilteredQuestions(){
    this.setState({
      filteredQuestionList : this.state.questionList.filter(question => question.completed == true)
    });
    
  }


 render(){
  const { filteredQuestionList, questionList, currentQuestion, currentIndex } = this.state;
    return(
      <div className="questions-and-answers-container">
        <div className="box questions-list" style={{ flex: 1.5 }}>
          <div className="title">Submitted Questions</div>
          {/* {loadingQuestions ? (
            <div className="loading-indicator" id="loading-indicator">Loading...</div>
          ) : ( */}
            <div className="content changeable-font" id="questions-content">
              { questionList.map((question, index) => (
                //if(question.completed === true){
                  <div
                    className="item"
                    onClick={() => this.setActiveQuestion(question, index)}
                    key={index}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="item-number">{index + 1}</div>
                    <div className="item-text">{question.question}</div>
                  </div>
                //}
                ))}
            </div>
        </div>
        <div className="box answers-list" style={{ flex: 3 }}>
          <div className="title">Answers</div>
          <div className="content changeable-font" id="answers-content">
            {currentQuestion ? currentQuestion.answer != "Answer then Mark as complete" ? (
                <div className="answer">
                  <div className="answer-question">{currentQuestion.question}</div>
                  <div className="answer-text">{currentQuestion.answer}</div>
                </div>
              ) : (
                <div className="no-answer">
                  <div className="answer-question">{currentQuestion.question}</div>
                  <div className="answer-text"> This question currently does not have an answer. </div>
                </div>
              ) : (
              <div className="placeholder-text">Click on a question on the left to see the response.</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

//export default QuestionsList;
