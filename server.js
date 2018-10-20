const express = require('express');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;
//tells the server to start listening on either a deployed site's given port or the local port 3000
const app = express();
//


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//connects the server to the public folder 


mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true });


require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});

