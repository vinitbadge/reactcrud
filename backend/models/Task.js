const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: {
        type: String
    },
    mentor_id: {
        type: Schema.Types.ObjectId
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, {
        collection: 'tasks'
    })

module.exports = mongoose.model('Task', taskSchema)