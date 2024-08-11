import http from "../http-common";
import { BlobServiceClient } from "@azure/storage-blob";

// Specify the name of the container and JSON file
const containerName = "doctornetwork-questions";
const fileName = "Data.json";

// Helper function to convert a readable stream to a string
function streamToString(readableStream) {
  const chunks = [];
  for (const chunk of readableStream) {
    chunks.push(chunk);
  }
  return new TextDecoder().decode(new Uint8Array(chunks.flat()));
}

async function blobToString(blob) {
  const fileReader = new FileReader();
  return new Promise((resolve, reject) => {
    fileReader.onloadend = (ev) => {
      resolve(ev.target.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsText(blob);
  });
}


class FormDataService {
  async getAll() {
    // Create a BlobServiceClient object
    const blobServiceClient = BlobServiceClient.fromConnectionString("BlobEndpoint=https://doctornetwork.blob.core.windows.net/;QueueEndpoint=https://doctornetwork.queue.core.windows.net/;FileEndpoint=https://doctornetwork.file.core.windows.net/;TableEndpoint=https://doctornetwork.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bf&srt=sco&sp=rwdlaciytfx&se=2028-08-11T07:24:39Z&st=2024-08-10T23:24:39Z&spr=https&sig=f5qtdD5hypctaXv5CV13rNnmN4GU1pnEiIhpqwNbUhA%3D");
    // Get a reference to the container and blob
    let i = 1;
    // for await (const container of blobServiceClient.listContainers()) {
    //   console.log(`Container ${i++}: ${container.name}`);
    // }
  
    // Create a container
    const containerName = `doctornetwork-questions`;

    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);

    // Use the BlobClient to download the file contents
    const downloadBlockBlobResponse = await blobClient.download();
    const downloadedContent = await blobToString(await downloadBlockBlobResponse.blobBody);
    return JSON.parse(downloadedContent);
  }

  get(id) {
    return http.get(`/form/${id}`);
  }

  create(data) {
    // Create a BlobServiceClient object
    const blobServiceClient = BlobServiceClient.fromConnectionString("BlobEndpoint=https://doctornetwork.blob.core.windows.net/;QueueEndpoint=https://doctornetwork.queue.core.windows.net/;FileEndpoint=https://doctornetwork.file.core.windows.net/;TableEndpoint=https://doctornetwork.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bf&srt=sco&sp=rwdlaciytfx&se=2028-08-11T07:24:39Z&st=2024-08-10T23:24:39Z&spr=https&sig=f5qtdD5hypctaXv5CV13rNnmN4GU1pnEiIhpqwNbUhA%3D");
    // Create a container
    const containerName = `doctornetwork-questions`;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(fileName);

    let content = this.getAll();
    content.push(data);

    console.log(content);

    return http.post("/form/", data);
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
