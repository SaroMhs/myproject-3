const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const userSchema = new Schema({
  firstName : String,
  lastName : String,
  email: String,
  password: String,
  status:{
    type : String,
    enum:['Etudiant','Prof'] 
  },
  parcours:'String',
  cours : [{type: Schema.Types.ObjectId, ref :"Cours"}],
  userAvatar: { type: String, default: 'images/default-avatar.png' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// ajouter matières + parcours + description en mode prof


// à ajouter au profil prof
// cours : [{type: Schema.Types.ObjectId, ref :"Cours"}],