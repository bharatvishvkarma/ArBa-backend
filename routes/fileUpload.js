const multer = require('multer');
const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();
const express = require('express');

const uploadFile = express.Router()

const bucketName = process.env.AWS_BUCKET_NAME;

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "ap-south-1",
};

const S3 = new AWS.S3(awsConfig);

let upload = multer({
    // storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: function (req, file, done) {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"
        ) {
            done(null, true);
        } else {
            //prevent the upload
            var newError = new Error("File type is incorrect");
            newError.name = "MulterError";
            done(newError, false);
        }
    },
});

const uploadToS3 = (fileData) => {
    // console.log(fileData +"3")
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucketName,
            Key: `${Date.now().toString()}.jpg`,
            Body: fileData,
        };
        S3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            // console.log(data + "1");
            return resolve(data);
        });
    });
};

uploadFile.post("/upload", upload.single("image"), async (req, res) => {
    // console.log(req.file + "2");
    if (req.file) {
        let upFile = await uploadToS3(req.file.buffer);
        res.send({
            msg: "Image uploaded succesfully",
            file: upFile,
        });
    }
});

module.exports = uploadFile