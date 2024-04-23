const base64decode = (str) => Buffer.from(str, 'base64').toString('utf-8');

const { exec } = require("child_process");

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

module.exports = base64decode;
module.exports = readSecretFromFile;
