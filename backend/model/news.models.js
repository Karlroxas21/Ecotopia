const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    photo: String,
    datePublished: Date,
    description: String,
    link: String
}, {collection: 'news_Features'});

const News = mongoose.model('News', newsSchema);

module.exports = News;