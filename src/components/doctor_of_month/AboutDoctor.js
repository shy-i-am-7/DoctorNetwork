import React, { Component } from "react";
import AboutDataService from "../../services/abtdoctor.service";

export default class AboutDoctor extends Component {
  constructor(props) {
    super(props);
    this.retrieveDoctors = this.retrieveDoctors.bind(this);
    this.getLastDoctor = this.getLastDoctor.bind(this);

    this.state = {
      doctorList: [],
      lastDoctor: null
    };
  }

  componentDidMount() {
    this.retrieveDoctors();
  }

  retrieveDoctors() {
    AboutDataService.getAll()
      .then(response => {
        this.setState({
          doctorList: response
        },
        this.getLastDoctor
      );
      })
      .catch(e => {
        console.log(e);
      });
  }

  getLastDoctor(){
    const { doctorList } = this.state;
    this.setState({
      lastDoctor : doctorList[doctorList.length - 1]
    });
  }

  render() {
    const { lastDoctor } = this.state;

    return (
      <>
        <div className="box doctor-photo-box">
          <div className="title">Doctor of the Month</div>
          <div className="author-photo">
            <img src={lastDoctor?.image} alt="Doctor"/>
          </div>
          <div className="author-name">{lastDoctor?.name}</div>
        </div>
        <div className="box doctor-info-box">
          <div className="author-title">About the Doctor</div>
          <div className="author-description">{lastDoctor?.description}</div>
          <div className="author-buttons">
            <a href={lastDoctor?.learnmore} className="aboutdoc-button">
              Click here to learn more
            </a>
            <a 
              href={lastDoctor?.webinarLink} 
              target="_blank" 
              rel="noreferrer" 
              className="aboutdoc-button"
            >
              {lastDoctor?.ButtonName}
            </a>
          </div>
        </div>
      </>
    );
  }
}