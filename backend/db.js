const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&directConnection=true&tls=false"
mongoose.set('strictQuery', false);

const connectToMongo = () => {         // using async and await function so that promises can resolve
    mongoose.connect(mongoURI, () => {     // ()+> callback function jo ki humko kuch return karke dega 
        console.log("Connected to mongo successfully");
    },6000)

    
}
module.exports = connectToMongo;

