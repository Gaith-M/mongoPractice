const mongoose = require("mongoose");
const schema = mongoose.Schema;

// - Person Prototype -
// --------------------
// name : string [required]
// age : number
// favoriteFoods : array of strings (*)

const Person = new Schema({
  name: String[required],
  age: Number,
  favoriteFoods: [String],
});

module.exports = Person;
