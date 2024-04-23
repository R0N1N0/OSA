require("dotenv").config();

const base64decode = (str) => Buffer.from(str, 'base64').toString('utf-8');

const { exec } = require('child_process');

const fs = require('fs').promises;

async function readSecretFromFile(filePath) {
  try {
    const secret = await fs.readFile(filePath, 'utf-8');
    return secret.trim();
  } catch (error) {
    console.error(`Error reading secret from file ${filePath}:`, error);
    throw error;
  }
}

function decrypt(encryptedValue) {

    const key = process.env.ENCRYPTION_KEY; // To do: put the path to mounted secret, dumbass
    
    return new Promise((resolve, reject) => {
        const cmd = `echo "${encryptedValue}" | openssl enc -d -aes-256-cbc -pbkdf2 -a -pass "pass:${key}"`;

        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(key);
                console.log(encryptedValue);
                reject(`Error in decrypt the vaule: ${stderr}`);
                return;
            }
            resolve(stdout.trim());
        });
    });
}

module.exports = {
  decrypt,
  readSecretFromFile
};