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
        
        console.log(response);
        //console.log(response.image);
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
    //console.log(lastDoctor);
  }


  render(){
    const { lastDoctor } = this.state;

    return (
      <div className="box about-author">
        <div className="title">About the Doctor</div>
        {lastDoctor ? (
          <>
            <div className="author-photo">
              <img src={lastDoctor.image} alt="Doctor" />
            </div>
            <div className="author-name">{lastDoctor.name}</div>
            <div className="author-description">{lastDoctor.description}</div>
            <a href={lastDoctor.learnmore} className="submit-button">
              Click here to learn more
            </a>
          </>
        ) : (
          <div>Loading doctor data...</div>
        )}
      </div>
    );
  }
}