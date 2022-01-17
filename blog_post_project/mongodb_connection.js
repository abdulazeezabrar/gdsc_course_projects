var mongoose = require('mongoose');

module.exports.init = async function (){
    await mongoose.connect('mongodb://localhost:27017/blog_post');
    console.log('succfuly connected to database')
}
