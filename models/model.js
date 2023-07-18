const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: String,
    originalUrl: String,
  });

const ShortUrl = mongoose.model('Urls', urlSchema);

module.exports = ShortUrl;
