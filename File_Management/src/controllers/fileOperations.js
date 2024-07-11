const fs = require("fs/promises");
const path  = require("path");
const dataFolder  = require('../config/config.js');
const FileSchema = require("../models/fileSchema.js");


const connectToFolder = async () => {
    try { await fs.access(dataFolder);
      return("Connected to data folder successfully!");
  } catch (error) {
      if (error.code === 'ENOENT') {
        console.log("Data folder does not exist. Attempting to create it...");
          try {
              await fs.mkdir(dataFolder, { recursive: true });
            return(`Data folder created successfully! and connected to the directory \n ${dataFolder}`);
          } catch (mkdirError) {
              console.error("Error creating data folder:", mkdirError);
          }
      } else {
          console.error("Error accessing data folder:", error);
      }
};
}

const writeFile = async (req, res) => {

  const { filename, data, options } = req;
  if (!filename || !data) {
    throw new Error("Filename and data are required");
  }
  const fileSchema = FileSchema(filename, data, options);

  try {
    // to check whether existance of data folder in the directory
    await fs.mkdir(path.dirname(fileSchema.filename), { recursive: true });
    
    //File system writeFile function
    await fs.writeFile(
      fileSchema.filename,
      fileSchema.data,
      fileSchema.options
    );
    return { message: "File written successfully", path: fileSchema.filename };
  } catch (error) {
    throw new Error(`Error writing file: ${error.message}`);
  }
};

const readFile = async (filename) => {
  try {
    const fileSchema = await FileSchema(filename);
    const data = await fs.readFile(fileSchema.filename, fileSchema.options);
    return data.toString();
  } catch (error) {
    console.error('Error reading file:', error);
    throw error; 
  }
};

const updateFile = async (filename, newData) => {
  try {
    const fileSchema = await FileSchema(filename, newData);
    await fs.writeFile(fileSchema.filename, fileSchema.data, fileSchema.options);
    return `File ${filename} updated successfully`;
  } catch (error) {
    console.error('Error updating file:', error);
    throw error; 
  }
};


const deleteFile = async (filename) => {
  try {
    const fileSchema = await FileSchema(filename);
    await fs.unlink(fileSchema.filename);
    return `File ${filename} deleted successfully`;
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error; 
  }
};

const listFiles = async (req, res) => {
  try {
    const files = await fs.readdir(dataFolder);
     return files;
  } catch (error) {
    console.error('Error listing files:', error);
    res.status(400).json({ error: error.message });
  }
};


module.exports = {connectToFolder, writeFile, readFile, updateFile, deleteFile, listFiles}