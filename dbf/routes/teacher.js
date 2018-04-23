const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: 
    {
        type: String,
        required:[true,'Name field is required']
    },
    
    id: 
    {
        type: Number,
        required:[true,'ID field is required']
    },
    
    password: 
    {
        type:String,
        required:[true,'Name field is required']
    },

    subject: 
    {
        type: String,
        required:[true,'Subject field is required']
    },

    class: 
    {
        type: String,
        required:[true,'Class field is required']
    },
    
    rating: 
    {
        type: Number
    }
});

const Teachers = mongoose.model('teachers', TeacherSchema);

module.exports = Teachers;