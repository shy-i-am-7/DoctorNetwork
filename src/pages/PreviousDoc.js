import React, { Component } from "react";
import DoctorCard from "../components/PreviousDoc/DoctorCard";
import DoctorDetail from "../components/PreviousDoc/DoctorDetail";
import DoctorDataService from "../services/doctor.service";
import "./PreviousDoc.css";

export default class PreviousDoc extends Component {
  constructor(props) {
    super(props);
    this.retrieveDoctors = this.retrieveDoctors.bind(this);
    this.handleDoctorSelect = this.handleDoctorSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      doctors: [],
      selectedDoctor: null,
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
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  }

  handleDoctorSelect(doctor) {
    this.setState({ selectedDoctor: doctor });
    console.log(doctor);
  }

  handleClose() {
    this.setState({ selectedDoctor: null });
  }

  render() {
    const { doctors, selectedDoctor } = this.state;

    if (selectedDoctor) {
      return <DoctorDetail doctor={selectedDoctor} onClose={this.handleClose} />;
    }

    return (
      <div className="container">
        <div className="prev_doc_container">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div className="doctor-card-wrapper" key={index}>
                <DoctorCard
                  doctor={doctor}
                  onDoctorSelect={() => this.handleDoctorSelect(doctor)}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}