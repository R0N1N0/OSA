const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: 'dpn3ptqf2',
  api_key: '255636333344986',
  api_secret: 'kSojXKupdgG5NRgLNEM5M0zuI7w',
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
