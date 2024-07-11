const path = require('path');
const dataFolder = require('../config/config.js');

const FileSchema = (filename, data, options = { encoding: "utf8" }) => {

    try {
        
        const baseName = path.basename(filename);
    
        
        return {
            filename: path.join(dataFolder, baseName),
            data: data || '',
            options: options
        };
    } catch (error) {
        console.log(error)
    }
    
};

module.exports = FileSchema;