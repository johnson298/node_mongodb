const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/node_mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('👍 db is connected !');
}).catch(err => {
    console.log(`👎 db is failed connect with errors: ${err}`);
})