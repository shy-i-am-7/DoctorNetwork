import React, { Component } from "react";
import DoctorCard from "../components/PreviousDoc/DoctorCard";
import DoctorDataService from "../services/doctor.service";
import "./PreviousDoc.css";

export default class PreviousDoc extends Component {
  constructor(props) {
    super(props);
    this.retrieveDoctors = this.retrieveDoctors.bind(this);


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


  render() {
    const { doctors} = this.state;

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    return (
      <div className="container">
        <div className="prev_doc_container">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              // <div className="doctor-answer-container" >
                <div className="doctor-card-wrapper" key={index}>
                  <DoctorCard
                    doctor={doctor}
                    // onQuestionSelect={(questionIndex) =>
                    //   this.setActiveQuestion(index, questionIndex)
                    // }
                  />
                </div>
                
              // </div>
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
