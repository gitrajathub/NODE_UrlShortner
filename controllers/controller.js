const ShortUrl = require('../models/model');

const dotenv = require("dotenv");
require('dotenv').config();





exports.postURL = async (req, res) => {
  try {
    const { url } = req.body;
    const { nanoid } = await import("nanoid");

    const shortId = nanoid(6);
    const shortUrl = `http:/${shortId}`;


    const urlData = new ShortUrl({
      shortId,
      originalUrl: url,
    });
    await urlData.save(); 

    res.json({ shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.getURL = async (req, res) => {
  const { shortId } = req.params;

  try {

    const urlData = await ShortUrl.findOne({ shortId });

    if (urlData) {
      res.redirect(urlData.originalUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

