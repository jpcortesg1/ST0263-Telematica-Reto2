const grpc = require('@grpc/grpc-js');
const { FileService } = require('./files_grpc_pb.js');
const { Folder, FileList } = require('./files_pb.js');
const fs = require('fs');

function listFiles(call, callback) {
  const folderPath = call.request.getPath();
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      callback(err);
    } else {
      const fileList = new FileList();
      fileList.setFilesList(files.map(file => {
        const fileMsg = new File();
        fileMsg.setName(file);
        return fileMsg;
      }));
      callback(null, fileList);
    }
  });
}

function main() {
  const server = new grpc.Server();
  server.addService(FileService, { listFiles });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server started');
  });
}

main();
