const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }

},
{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task