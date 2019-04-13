const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const coursSchema = new Schema({
  dateDebut: String,
  dateFin :String,
  matiere: String,
  description: String,
  userId : [{type: Schema.Types.ObjectId, ref :"User"}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Cours = mongoose.model('Cours', coursSchema);
module.exports = Cours;


/* COURS

"dateDebut":"2019-03-04T12:30",
"dateFin":"2019-03-04T14:30",
"matiere":"maths",
"description":"cours lycée"

*/
/* Sign up

"firstName":"",
"lastName":"",
"email":"",
"status":"",
"password":"1234"

*/
