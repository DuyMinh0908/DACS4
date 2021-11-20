const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const User = new Schema({
    username: { type: String,required:true, maxlength: 255 },
    password: { type: String,required:true, maxlength: 50 },
    name:   {type: String,maxlength: 50},
    image: { type: String},
    room:{type: Array},
    slug:{type: String, slug:'username', unique: true}
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);