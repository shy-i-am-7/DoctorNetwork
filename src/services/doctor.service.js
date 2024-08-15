import http from "../http-common";

class DoctorDataService {
  async getAllDoctors() {
    try {
      const response = await http.get("https://doctornetwork-prevdoc-default-rtdb.firebaseio.com/doctors.json");
      if (response.data) {
        return Object.values(response.data);
      }
      return [];
    } catch (error) {
      console.error("Error fetching doctors:", error);
      return [];
    }
  }

  getDoctor(id) {
    return http.get(`/doctors/${id}.json`);
  }

  create(data) {
    return http.post("https://doctornetwork-prevdoc-default-rtdb.firebaseio.com/doctors.json", data);
  }

  update(id, data) {
    return http.put(`/doctors/${id}.json`, data);
  }

  delete(id) {
    return http.delete(`/doctors/${id}.json`);
  }
}

export default new DoctorDataService();