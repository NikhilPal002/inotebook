const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://nikhilpal002:nikhilpal@cluster1.rxwyksh.mongodb.net/?retryWrites=true&w=majority"    atlas to app direct
// const mongoURI = " mongodb+srv://nikhilpal002:nikhilpal@cluster1.rxwyksh.mongodb.net/test"    cluster connected to compass
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&directConnection=true&tls=false"


const connectToMongo = () => {         // using async and await function so that promises can resolve
    mongoose.connect(mongoURI, () => {     // ()+> callback function jo ki humko kuch return karke dega 
        console.log("Connected to mongo successfully");
    },6000)

    
}
module.exports = connectToMongo;


// mongoose.connect(
//     process.env.MONGO_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//     () => {
//         console.log('Connected to MongoDB');
//     }
// );

