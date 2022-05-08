const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shikha:<password>@cluster0.qbq7i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {

}).then(() => {
    console.log(`Connection Successful`);
}).catch((e) => {
    console.log(`No connection`);
})



