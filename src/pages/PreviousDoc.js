import React, { Component } from "react";
import DoctorCard from "../components/PreviousDoc/DoctorCard";
import DoctorDetail from "../components/PreviousDoc/DoctorDetail";
import DoctorDataService from "../services/doctor.service";
import ResidentDataService from "../services/resident.service";
import "./PreviousDoc.css";

export default class PreviousDoc extends Component {
  constructor(props) {
    super(props);
    this.retrieveDoctors = this.retrieveDoctors.bind(this);
    this.retrieveResidents = this.retrieveResidents.bind(this);
    this.handleDoctorSelect = this.handleDoctorSelect.bind(this);
    this.handleResidentSelect = this.handleResidentSelect.bind(this);
    this.handleDocClose = this.handleDocClose.bind(this);
    this.handleResClose = this.handleResClose.bind(this);

    this.state = {
      doctors: [],
      residents:[],
      selectedDoctor: null,
      selectedResident: null,
      isPhysicianDetails: props.isPhysician ?? true,
      loading: true,
    };
  }

  componentDidMount() {
    this.retrieveDoctors();
    this.retrieveResidents();
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

  retrieveResidents() {
    ResidentDataService.getAllResidents()
      .then((response) => {
        this.setState({
          residents: response,
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

  handleResidentSelect(resident) {
    this.setState({ selectedResident: resident });
    console.log(resident);
  }

  handleDocClose() {
    this.setState({ selectedDoctor: null });
  }

  handleResClose() {
    this.setState({ selectedResident: null });
  }

  render() {
    const { doctors, selectedDoctor, residents, selectedResident, isPhysicianDetails } = this.state;
    if(isPhysicianDetails){
      if (selectedDoctor) {
        return <DoctorDetail doctor={selectedDoctor} onClose={this.handleDocClose} />;
      }
  
      return (
        <div className="container">
          <div className="prev_doc_container">
            {doctors && doctors.length > 0 ? (
              doctors.map((doctor, index) => (
                <div className="doctor-card-wrapper" key={index}>
                  <DoctorCard
                    doctor={doctor}
                    isPhysician={isPhysicianDetails}
                    onDoctorSelect={() => this.handleDoctorSelect(doctor)}
                    onResidentSelect={null}
                  />
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      );
    } else {
      if (selectedResident) {
        return <DoctorDetail doctor={selectedResident} onClose={this.handleResClose} />;
      }
  
      return (
        <div className="container">
          <div className="prev_doc_container">
            {residents && residents.length > 0 ? (
              residents.map((resident, index) => (
                <div className="doctor-card-wrapper" key={index}>
                  <DoctorCard
                    doctor={resident}
                    isPhysician={isPhysicianDetails}
                    onDoctorSelect={null}
                    onResidentSelect={() => this.handleResidentSelect(resident)}

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
}