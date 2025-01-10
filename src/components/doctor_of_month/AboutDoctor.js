// import React, { Component } from "react";
// import AboutDoctorService from "../../services/abtdoctor.service";
// import AboutResidentService from "../../services/abtresident.service";

// export default class AboutDoctor extends Component {
//   constructor(props) {
//     super(props);
//     this.retrieveDoctors = this.retrieveDoctors.bind(this);
//     this.getLastDoctor = this.getLastDoctor.bind(this);
//     // this.retrieveResidents = this.retrieveResidents.bind(this);
//     this.getLastResident = this.getLastResident.bind(this);
//     // isPhysician = this.props;
//     this.state = {
//       doctorList: [],
//       residentList: [],
//       lastDoctor: null,
//       lastResident: null,
//       isPhysicianDetails: props.isPhysician ?? true,
//     };
//     console.log("AbtDoctor: "+ props.isPhysician);
//   }

//   componentDidMount() {
//     this.retrieveDoctors();
//   }

//   retrieveDoctors() {
//     AboutDoctorService.getAll()
//       .then(response => {
//         this.setState({
//           doctorList: response
//         },
//         this.getLastDoctor
//       );
//       })
//       .catch(e => {
//         console.log(e);
//       });

//       AboutResidentService.getAll()
//       .then(response => {
//         this.setState({
//           residentList: response
//         },
//         this.getLastResident
//       );
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   getLastDoctor(){
//     const { doctorList } = this.state;
//     this.setState({
//       lastDoctor : doctorList[doctorList.length - 1]
//     });
//   }

//   getLastResident(){
//     const { residentList } = this.state;
//     this.setState({
//       lastResident : residentList[residentList.length - 1]
//     });
//   }

//   render() {
//     const { lastDoctor, lastResident, isPhysicianDetails } = this.state;
//     console.log("AbtDoct: " + isPhysicianDetails);
//     if (!isPhysicianDetails){
//       return (
//         <>
//           <div className="box doctor-photo-box">
//             <div className="title">Resident of the Month </div>
//             <div className="author-photo">
//               <img src={lastResident?.image} alt="Resident"/>
//             </div>
//             <div className="author-name">{lastResident?.name}</div>
//           </div>
//           <div className="box doctor-info-box">
//             <div className="author-title title">About the Resident</div>
//             <div className="author-description">{lastResident?.description}</div>
//             <div className="author-buttons">
//               <a href={lastResident?.learnmore} className="aboutdoc-button">
//               {lastResident?.LearnMoreButtonName} 
//               </a>
//               <a 
//                 href={lastResident?.webinarLink} 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="aboutdoc-button"
//               >
//                 {lastResident?.ButtonName}
//               </a>
//             </div>
//           </div>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <div className="box doctor-photo-box">
//             <div className="title">Doctor of the Month</div>
//             <div className="author-photo">
//               <img src={lastDoctor?.image} alt="Doctor"/>
//             </div> <br></br>
//             <div className="author-name">{lastDoctor?.name}</div>
//           </div>
//           <div className="box doctor-info-box">
//             <div className="author-title title">About the Doctor</div>
//             <div className="author-description">{lastDoctor?.description}</div>
//             <div className="author-buttons">
//               <a href={lastDoctor?.learnmore} className="aboutdoc-button">
//                 {lastDoctor?.LearnMoreButtonName} 
//               </a>
//               <a 
//                 href={lastDoctor?.webinarLink} 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="aboutdoc-button"
//               >
//                 {lastDoctor?.ButtonName}
//               </a>
//             </div>
//           </div>
//         </>
//       );
//     }
    
//   }
// }

import React, { useEffect, useState } from "react";
import AboutDoctorService from "../../services/abtdoctor.service";
import AboutResidentService from "../../services/abtresident.service";
import { useTheme } from "../../ThemeContext"; // Import the ThemeContext

function AboutDoctor() {
  const { isPhysician } = useTheme(); // Get the current theme
  const [doctorList, setDoctorList] = useState([]);
  const [residentList, setResidentList] = useState([]);
  const [lastDoctor, setLastDoctor] = useState(null);
  const [lastResident, setLastResident] = useState(null);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    // Fetch doctor data
    AboutDoctorService.getAll()
      .then((response) => {
        setDoctorList(response);
        setLastDoctor(response[response.length - 1]);
      })
      .catch((e) => console.error(e));

    // Fetch resident data
    AboutResidentService.getAll()
      .then((response) => {
        setResidentList(response);
        setLastResident(response[response.length - 1]);
      })
      .catch((e) => console.error(e));
  };

  if (!isPhysician) {
    return (
      <>
        <div className="box doctor-photo-box">
          <div className="title">Resident of the Month</div>
          <div className="author-photo">
            <img src={lastResident?.image} alt="Resident" />
          </div>
          <div className="author-name">{lastResident?.name}</div>
        </div>
        <div className="box doctor-info-box">
          <div className="author-title title">About the Resident</div>
          <div className="author-description">{lastResident?.description}</div>
          <div className="author-buttons">
            <a href={lastResident?.learnmore} className="aboutdoc-button">
              {lastResident?.LearnMoreButtonName}
            </a>
            <a
              href={lastResident?.webinarLink}
              target="_blank"
              rel="noreferrer"
              className="aboutdoc-button"
            >
              {lastResident?.ButtonName}
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="box doctor-photo-box">
        <div className="title">Doctor of the Month</div>
        <div className="author-photo">
          <img src={lastDoctor?.image} alt="Doctor" />
        </div>
        <br />
        <div className="author-name">{lastDoctor?.name}</div>
      </div>
      <div className="box doctor-info-box">
        <div className="author-title title">About the Doctor</div>
        <div className="author-description">{lastDoctor?.description}</div>
        <div className="author-buttons">
          <a href={lastDoctor?.learnmore} className="aboutdoc-button">
            {lastDoctor?.LearnMoreButtonName}
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

export default AboutDoctor;
