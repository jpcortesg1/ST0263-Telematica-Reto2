// GENERATED CODE -- DO NOT EDIT!

'use strict';
const protobuf = require('protobufjs/minimal');

const protobufPackage = null;

const baseFolder = {
    path: '',
};

 const Folder = {
    encode(message, writer = protobuf.Writer.create()) {
        if (message.path !== '') {
            writer.uint32(10).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof protobuf.Reader ? input : new protobuf.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length, message = { ...baseFolder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty('path')) {
            throw new protobuf.ValidationError('Missing required property: path');
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFolder };
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        } else {
            throw new protobuf.ValidationError('Property path missing');
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseFolder };
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        } else {
            throw new protobuf.ValidationError('Property path missing');
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
};

const baseFile = {
    name: '',
    size: 0,
};

 const File = {
    encode(message, writer = protobuf.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.size !== 0) {
            writer.uint32(16).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof protobuf.Reader ? input : new protobuf.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length, message = { ...baseFile };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.size = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty('name')) {
            throw new protobuf.ValidationError('Missing required property: name');
        }
        if (!message.hasOwnProperty('size')) {
            throw new protobuf.ValidationError('Missing required property: size');
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFile };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            throw new protobuf.ValidationError('Property name missing');
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = protobuf.int64ToInt(object.size);
        } else {
            throw new protobuf.ValidationError('Property size missing');
        }
        return message;
    },
    fromPartial(object) {
        const message = { ...baseFile };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            throw new protobuf.ValidationError('Property name missing');
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            throw new protobuf.ValidationError('Property size missing');
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.size !== undefined && (obj.size = protobuf.int64ToNumber(message.size));
        return obj;
    },
};

 const FileService = {
    listFiles: {
        path: '/FileService/ListFiles',
        requestStream: false,
        responseStream: false,
        requestType: protobufPackage + 'Folder',
        responseType: protobufPackage + 'File',
        requestSerialize: (value) => {
            return protobuf.encode(File.encode, value).finish();
        },
        requestDeserialize: (value) => {
            return File.decode(protobuf.Reader.create(value));
        },
        responseSerialize: (value) => {
            return protobuf.encode(File.encode, value).finish();
        },
        responseDeserialize: (value) => {
            return File.decode(protobuf.Reader.create(value));
        },
    },
};

module.exports = {
    protobufPackage,
    Folder,
    File,
    FileService,
}