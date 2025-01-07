import { useState } from 'react';
import React, { Component } from "react";
import FormDataService from "../../services/form.service";
import FormResDataService from "../../services/formres.service";

export default class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.saveForm = this.saveForm.bind(this);
    this.newForm = this.newForm.bind(this);
    //this.formPreventDefault = this.formPreventDefault.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "", 
      question: "",
      answer: "",
      completed: false,
      submitted: false,
      isPhysicianDetails: props.isPhysician ?? true,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    });
  }

  // formPreventDefault(e) {
  //   //alert('here');  
  //   e.preventDefault();
  // }

  saveForm(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
      answer:"Answer then Mark as complete"
    };
    if(this.state.isPhysicianDetails === true){
      FormDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          question: response.data.question,
          answer: response.data.answer,
          completed: response.data.completed,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    } else {
      FormResDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          question: response.data.question,
          answer: response.data.answer,
          completed: response.data.completed,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
    
  }

  newForm() {
    this.setState({
      id: null,
      name: "",
      email: "", 
      question: "",
      answer: "",
      completed: false,

      submitted: false
    });
  }


  render(){
    //const [confirmation, setConfirmation] = useState(null);
    return (
      <div className="box ask-question-box">
        <div className="title">Ask a Question!</div>
        {!this.state.submitted ? (
          <form id="question-form" onSubmit={this.saveForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required value={this.state.name} onChange={this.onChangeName}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={this.state.email} onChange={this.onChangeEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="question">Question</label>
              <textarea id="question" name="question" required value={this.state.question} onChange={this.onChangeQuestion}></textarea>
            </div>
            <button type="submit" className="submit-button" id="submit-button">Submit</button>
          </form>
        ) : (
          <div className="form-message" id="form-response">
            Your question has been submitted. Click here to submit another question!
            <button className="another-question-button" onClick={this.newForm}>Submit another question</button>
          </div>
        )}
      </div>
    );
  }
}

//export default AskQuestion;
