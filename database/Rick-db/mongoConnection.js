const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://admin:sdc1234@sdc-zjmho.mongodb.net/test?retryWrites=true';
const mongoURI = 'mongodb://localhost:27017/spotify';

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true
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


  // var artists1 = new Artists({
  //   id: 10000000,
  //   artist: 'Rick Morrison',
  //   image: "https://images.unsplash.com/photo-1482263231623-6121096b0d3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=50&h=50&fit=crop&ixid=eyJhcHBfaWQiOjF9",
  // })

  // artists1.save((err, results) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   console.log(results);
  // })