const mongoose = require('mongoose');

const { Schema } = mongoose;

const problemTrashSchema = new Schema({
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
                bullet_3: [String],
                bullet_4: [String],
                bullet_5: [String],
                bullet_6: [String]
        },
        references: [String]
        
},
{collection: 'problem_trash'}
);

const ProblemTrashModel = mongoose.model('ProblemTrash', problemTrashSchema);

module.exports = ProblemTrashModel;
