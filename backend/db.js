const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&tls=false"

const connectToMongo = ()=>{         // using async and await function so that promises can resolve
    mongoose.connect(mongoURI, ()=>{     // ()+> callback function jo ki humko kuch return karke dega 
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;