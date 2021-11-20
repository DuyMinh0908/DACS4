const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Room = new Schema({
    roomname: { type: String, maxlength: 255, require: true },
    createBy: { type: String, maxlength: 50 , require: true},
    image: { type: String, maxlength: 255 },
    description:{type: String, maxlength: 255},
    member:{type: Array},
    slug:{type: String, slug:'roomname', unique: true}

}, {
    timestamps: true,
});

module.exports = mongoose.model('Room', Room);