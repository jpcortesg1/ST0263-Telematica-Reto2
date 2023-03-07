// GENERATED CODE -- DO NOT EDIT!

'use strict';
const grpc = require('@grpc/grpc-js');
const protobuf = require('protobufjs/minimal');

const { Folder } = require('./files_pb.js');
const { FileList } = require('./files_pb.js');

function serialize_file_service_Folder(arg) {
  if (!(arg instanceof Folder)) {
    throw new Error('Expected argument of type file_service.Folder');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_Folder(buffer_arg) {
  return Folder.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_File(arg) {
  if (!(arg instanceof File)) {
    throw new Error('Expected argument of type file_service.File');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_File(buffer_arg) {
  return File.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_service_FileList(arg) {
  if (!(arg instanceof FileList)) {
    throw new Error('Expected argument of type file_service.FileList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_service_FileList(buffer_arg) {
  return FileList.deserializeBinary(new Uint8Array(buffer_arg));
}

const FileServiceService = {
  listFiles: {
    path: '/file_service.FileService/ListFiles',
    requestStream: false,
    responseStream: false,
    requestType: Folder,
    responseType: FileList,
    requestSerialize: serialize_file_service_Folder,
    requestDeserialize: deserialize_file_service_Folder,
    responseSerialize: serialize_file_service_FileList,
    responseDeserialize: deserialize_file_service_FileList,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
