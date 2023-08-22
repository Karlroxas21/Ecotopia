const mongoose = require('mongoose');

const { Schema } = mongoose;

const outDatedEngineSchema = new Schema({
        header: String,
        header_description: String,
        title: String,
        cases: {
                case1: [String],
                case2: [String],
                case3: [String],
                case4: [String]
        },
        bullets: {
                bullet_1: [String],
                bullet_2: [String],
                bullet_3: [String]
        },
        references: [String]
        
},
{collection: 'outdated_engine'}
);

const OutDatedEngineModel = mongoose.model('OutDatedEngine', outDatedEngineSchema);

module.exports = OutDatedEngineModel;
