const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, console.log(`Listening on port ${port}`))

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));