const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    photo: String,
    datePublished: String,
    description: String,
    link: String
}, {collection: 'news_Features'});

const News = mongoose.model('News', newsSchema);

module.exports = News;