const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MongoDBtest')
.then(()=> console.log('Database is connected'))
.catch(()=> console.log ('Problem Occur while connecting Database'));

