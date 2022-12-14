const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumname: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        timestamps: true,
        imutable: true,
        default: () => Date.now(),
        required: true,
    },
    updatedAt: {
        type: Date,
        timestamps: true,
        default: () => Date.now(),
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = mongoose.model('album', albumSchema);
