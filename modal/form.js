const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
,
address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  traveldate: {
    type: String,
    required: true
  },
  durationofstay: {
    type: String,
    required: true
  },

  member: {
    type: String,
    required: true
  },
  checked: {

type: Boolean,
required: true
,
default: false,

  }

});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;