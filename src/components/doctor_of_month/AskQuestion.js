import React, { useState } from "react";
import FormDataService from "../../services/form.service";
import FormResDataService from "../../services/formres.service";
import { useTheme } from "../../ThemeContext";

const AskQuestion = ({ onQuestionSubmit }) => {
  const { isPhysician } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveForm = (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      answer: "Answer then Mark as complete",
    };

    const service = isPhysician ? FormDataService : FormResDataService;
    service
      .create(data)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", question: "" }); // Reset form
        if (onQuestionSubmit) {
          onQuestionSubmit(); // Notify parent/sibling to refresh
        }
      })
      .catch((error) => console.error(error));
  };

  const newForm = () => {
    setSubmitted(false);
  };

  return (
    <div className="box ask-question-box">
      <div className="title">Ask a Question!</div>
      {!submitted ? (
        <form id="question-form" onSubmit={saveForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea
              id="question"
              name="question"
              required
              value={formData.question}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button" id="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="form-message" id="form-response">
          Your question has been submitted. Click here to submit another question!
          <button className="another-question-button" onClick={newForm}>
            Submit another question
          </button>
        </div>
      )}
    </div>
  );
};

export default AskQuestion;

