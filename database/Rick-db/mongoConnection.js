const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://admin:sdc1234@sdc-zjmho.mongodb.net/test?retryWrites=true';
const mongoURI = process.env.DB_URI || 'mongodb://database/spotify';

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  poolSize: 60,
});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

var Schema = mongoose.Schema;
var artistSchema = new Schema({
  id: Number,
  artist: String,
  image: String
})

let Artists = mongoose.model('artists', artistSchema);
const getArtist = (id) => {
  // return Artists.findById(id, 'name header_img -id').exec();
  return Artists.findOne({id: `${id}`}).exec();
};

module.exports.getArtist = getArtist;