import http from "../http-common";

class FormDataService {
  async getAll() {
    let content = await http.get("https://doctornetwork-ba59f-default-rtdb.firebaseio.com/test.json");
    content = Object.values(content.data)
    console.log(content);
    return content
  }

  get(id) {
    return http.get(`/form/${id}`);
  }

  create(data) {
    return http.post("https://doctornetwork-ba59f-default-rtdb.firebaseio.com/test.json", data);
  }

  update(id, data) {
    return http.put(`/form/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/form/delete/${id}`);
  }

  findByCompleted(completed = true) {
    return http.get(`/form?completed=${completed}`);
  }
}

export default new FormDataService();
