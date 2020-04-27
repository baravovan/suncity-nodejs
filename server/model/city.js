const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true, unique: true },
  lattitude: { type: String, required: true },
  longitude: { type: String, required: true }
}, { collection : 'city' });

const City = mongoose.model('City', citySchema);

module.exports = City;