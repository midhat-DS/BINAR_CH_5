// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dbuxups0z', 
    api_key: '352254577374217', 
    api_secret: 'kIgZ7EQo9Cf7SctLi2Q7495Ay6M' 
  });

module.exports = cloudinary;
