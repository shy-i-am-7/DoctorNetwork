import http from "../http-common";

class ResidentDataService {
  async getAllResidents() {
    try {
      const response = await http.get("https://docnet-prevres-default-rtdb.firebaseio.com/residents.json");
      if (response.data) {
        return Object.values(response.data);
      }
      return [];
    } catch (error) {
      console.error("Error fetching resident:", error);
      return [];
    }
  }

  getResident(id) {
    return http.get(`/residents/${id}.json`);
  }

  create(data) {
    return http.post("https://docnet-prevres-default-rtdb.firebaseio.com/residents.json", data);
  }

  update(id, data) {
    return http.put(`/residents/${id}.json`, data);
  }

  delete(id) {
    return http.delete(`/residents/${id}.json`);
  }
}

export default new ResidentDataService();