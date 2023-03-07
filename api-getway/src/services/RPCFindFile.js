// Required modules
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the protobuf
const packageDefinition = protoLoader.loadSync( __dirname + '/profile.proto',)
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// Create gRPC client
const client = new protoDescriptor.hello.HelloService('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;

