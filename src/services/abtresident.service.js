import http from "../http-common";

class AboutResidentService {
  async getAll() {
    let content = await http.get("https://docnet-aboutresident-default-rtdb.firebaseio.com/aboutresident.json");
    content = Object.values(content.data)
    console.log(content);
    return content
  }

  get(id) {
    return http.get(`/abtdoc/${id}`);
  }

  create(data) {
    return http.post("https://docnet-aboutresident-default-rtdb.firebaseio.com/aboutresident.json", data);
  }

  update(id, data) {
    return http.put(`/abtres/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/abtres/delete/${id}`);
  }

  findByCompleted(completed = true) {
    return http.get(`/abtres?completed=${completed}`);
  }
}

export default new AboutResidentService();