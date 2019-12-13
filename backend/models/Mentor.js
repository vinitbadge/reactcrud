const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mentorSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  }
}, {
    collection: 'mentors'
  })

module.exports = mongoose.model('Mentor', mentorSchema)