const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OVDDQF', { useNewUrlParser: true });

module.exports = mongoose;