import React, { useEffect, useState } from "react";
import DoctorCard from "../components/PreviousDoc/DoctorCard";
import DoctorDetail from "../components/PreviousDoc/DoctorDetail";
import DoctorDataService from "../services/doctor.service";
import ResidentDataService from "../services/resident.service";
import { useTheme } from "../ThemeContext";
import "./PreviousDoc.css";

const PreviousDoc = () => {
  const { isPhysician } = useTheme(); // Use ThemeContext to get the current theme
  const [doctors, setDoctors] = useState([]);
  const [residents, setResidents] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedResident, setSelectedResident] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPhysician) {
      retrieveDoctors();
    } else {
      retrieveResidents();
    }
  }, [isPhysician]);

  const retrieveDoctors = () => {
    setLoading(true);
    DoctorDataService.getAllDoctors()
      .then((response) => {
        setDoctors(response);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  };

  const retrieveResidents = () => {
    setLoading(true);
    ResidentDataService.getAllResidents()
      .then((response) => {
        setResidents(response);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    console.log("Selected Doctor:", doctor);
  };

  const handleResidentSelect = (resident) => {
    setSelectedResident(resident);
    console.log("Selected Resident:", resident);
  };

  const handleDocClose = () => setSelectedDoctor(null);
  const handleResClose = () => setSelectedResident(null);

  if (isPhysician) {
    if (selectedDoctor) {
      return <DoctorDetail doctor={selectedDoctor} onClose={handleDocClose} />;
    }

    return (
      <div className="container">
        <div className="prev_doc_container">
          {loading ? (
            <div>Loading...</div>
          ) : doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div className="doctor-card-wrapper" key={index}>
                <DoctorCard
                  doctor={doctor}
                  isPhysician={isPhysician}
                  onDoctorSelect={() => handleDoctorSelect(doctor)}
                />
              </div>
            ))
          ) : (
            <div>No doctors available</div>
          )}
        </div>
      </div>
    );
  } else {
    if (selectedResident) {
      return <DoctorDetail doctor={selectedResident} onClose={handleResClose} />;
    }

    return (
      <div className="container">
        <div className="prev_doc_container">
          {loading ? (
            <div>Loading...</div>
          ) : residents.length > 0 ? (
            residents.map((resident, index) => (
              <div className="doctor-card-wrapper" key={index}>
                <DoctorCard
                  doctor={resident}
                  isPhysician={isPhysician}
                  onResidentSelect={() => handleResidentSelect(resident)}
                />
              </div>
            ))
          ) : (
            <div>No residents available</div>
          )}
        </div>
      </div>
    );
  }
};

export default PreviousDoc;
