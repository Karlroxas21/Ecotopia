const mongoose = require('mongoose');

const { Schema } = mongoose;

const climateChangeSchema = new Schema({
  headers: [{
    header_1: String,
    header_paragraph: String
  }],
  Causes: [{
    cause_title: String,
    cause_description: String,
    'Causes Bullets': [{
      cause_bullet: String,
      cause_bullet_description: String
    }]
  }],
  Effects: [{
    effect_title: String,
    effect_description: String,
    'Effects Bullet': [{
      effect_bullet: String,
      effect_bullet_description: String
    }]
  }]
},
{collection: 'cases'}
);

const ClimateChangeModel = mongoose.model('ClimateChange', climateChangeSchema);

module.exports = ClimateChangeModel;
