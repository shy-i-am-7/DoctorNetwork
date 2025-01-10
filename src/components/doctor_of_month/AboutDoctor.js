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
        <div className="title">Physician of the Month</div>
        <div className="author-photo">
          <img src={lastDoctor?.image} alt="Doctor" />
        </div>
        <br />
        <div className="author-name">{lastDoctor?.name}</div>
      </div>
      <div className="box doctor-info-box">
        <div className="author-title title">About the Physician</div>
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
