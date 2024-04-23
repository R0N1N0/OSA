const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require("dotenv").config();
const decrypt = require("./decrypt.js");
const readSecretFromFile = require("./decrypt.js");

cloudinary.config({
  cloud_name: decrypt(readSecretFromFile("/etc/nodejs-conf/CLOUD_NAME")),
  api_key: decrypt(readSecretFromFile("/etc/nodejs-conf/API_KEY")),
  api_secret: decrypt(readSecretFromFile("/etc/nodejs-conf/API_SECRET")),
  secure: true,
});

async function uploadImages(path) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(path, (error, result) => {
            if (error) {
                reject(error);
            } else {
                fs.unlinkSync(path);
                resolve(result.secure_url);
            }
        });
    });
}

module.exports = uploadImages;
