import http from "../http-common";

class AboutDataService {
  async getAll() {
    let content = await http.get("https://doctornetwork-aboutdoc-default-rtdb.firebaseio.com/aboutdoctor.json");
    content = Object.values(content.data)
    console.log(content);
    return content
  }

  get(id) {
    return http.get(`/abtdoc/${id}`);
  }

  create(data) {
    return http.post("https://doctornetwork-aboutdoc-default-rtdb.firebaseio.com/aboutdoctor.json", data);
  }

  update(id, data) {
    return http.put(`/abtdoc/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/abtdoc/delete/${id}`);
  }

  findByCompleted(completed = true) {
    return http.get(`/abtdoc?completed=${completed}`);
  }
}

export default new AboutDataService();
