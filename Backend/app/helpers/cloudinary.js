const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
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
