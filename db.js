const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudTestDB', (err) => {
    if(!err){
        console.log('Mongo DB connection success...');
    } else {
        console.log('Error in DB connection : '+ JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;